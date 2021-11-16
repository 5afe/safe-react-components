import React, { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextFieldMui from '@material-ui/core/TextField';
import styled from 'styled-components';

import { trimSpaces } from '../../utils/strings';
import {
  addNetworkPrefix,
  checksumAddress,
  getAddressWithoutNetworkPrefix,
  getNetworkPrefix,
  isChecksumAddress,
  isValidAddress,
  isValidEnsName,
} from '../../utils/address';
import { throttle } from '../../utils/throttle';

type AddressInputProps = {
  id?: string;
  name: string;
  address: string;
  networkPrefix?: string;
  showNetworkPrefix?: boolean;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  onChangeAddress: (address: string) => void;
  getAddressFromDomain?: (name: string) => Promise<string>;
  showLoadingSpinner?: boolean;
  inputAdornment?: ReactElement | undefined | false;
  error?: string | undefined;
  helperText?: string | undefined;
};

function AddressInput({
  id,
  name,
  address,
  networkPrefix,
  showNetworkPrefix,
  label,
  placeholder,
  defaultValue,
  disabled,
  onChangeAddress,
  getAddressFromDomain,
  inputAdornment,
  showLoadingSpinner,
  error = '',
  helperText,
  ...rest
}: AddressInputProps): React.ReactElement {
  const [prefix, setPrefix] = useState(showNetworkPrefix ? networkPrefix : '');
  const [isLoadingENSResolution, setIsLoadingENSResolution] = useState(false);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = trimSpaces(e.target.value);

    const prefix = getNetworkPrefix(value);
    const address = getAddressWithoutNetworkPrefix(value);

    const isValidPrefix =
      value.includes(':') && !value.startsWith(':') && prefix === networkPrefix;

    if (isValidPrefix) {
      setPrefix(prefix);
      onChangeAddress(address);
    } else {
      setPrefix('');
      onChangeAddress(value);
    }
  }

  // checksum valid addresses
  useEffect(() => {
    if (isValidAddress(address) && !isChecksumAddress(address)) {
      onChangeAddress(checksumAddress(address));
    }
  }, [address, onChangeAddress]);

  // ENS resolution
  useEffect(() => {
    async function resolveDomainName(ENSName: string) {
      try {
        setIsLoadingENSResolution(true);
        const address = (await getAddressFromDomain?.(ENSName)) as string;
        onChangeAddress(address);
        setPrefix(showNetworkPrefix ? networkPrefix : '');
      } catch (e) {
        onChangeAddress(ENSName);
        setPrefix('');
      } finally {
        setIsLoadingENSResolution(false);
      }
    }

    const isEnsName = isValidEnsName(address);

    if (isEnsName && getAddressFromDomain) {
      throttle(() => resolveDomainName(address));
    }
  }, [
    address,
    getAddressFromDomain,
    networkPrefix,
    showNetworkPrefix,
    onChangeAddress,
  ]);

  const adornment =
    isLoadingENSResolution || showLoadingSpinner ? (
      <InputAdornment position="end">
        <CircularProgress size="16px" />
      </InputAdornment>
    ) : (
      (inputAdornment as ReactElement)
    );

  const hasError = !!error;

  const value = addNetworkPrefix(address, prefix);

  return (
    <TextField
      id={id || name}
      value={value}
      hiddenLabel={!value}
      label={label}
      helperText={hasError ? error : helperText}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
      disabled={disabled || isLoadingENSResolution}
      onChange={onChange}
      InputProps={{ endAdornment: adornment }}
      error={hasError}
      color="primary"
      variant="filled"
      spellCheck={false}
      InputLabelProps={{
        shrink: true,
      }}
      {...rest}
    />
  );
}

export default AddressInput;

const TextField = styled(TextFieldMui)`
  && {
    width: 400px;

    .MuiInputBase-input {
      padding: ${({ value, error }) =>
        !value && error ? '27px 12px 10px' : 'auto'};
    }

    .MuiInputLabel-root {
      ${({ value, error }) =>
        !value || error
          ? `border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;`
          : ''}
    }

    .MuiFormHelperText-root.Mui-error {
      position: absolute;
      top: 5px;
      z-index: 1;
      margin: 0;
      padding: 0 0 0 12px;
    }

    .MuiFilledInput-input {
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
    }

    .MuiFilledInput-root {
      background-color: ${({ theme }) => theme.colors.inputField};
    }

    .MuiInputLabel-filled {
      color: ${({ theme, error, disabled }) =>
        error
          ? theme.colors.error
          : disabled
          ? theme.colors.disabled
          : theme.colors.primary};
    }

    .MuiFormLabel-root.Mui-focused {
      color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.primary};
    }

    .MuiFilledInput-underline:before {
      border-bottom: 0;
    }

    .MuiInputBase-input {
      text-overflow: ellipsis;
      letter-spacing: 0.5px;
      font-size: 14px;
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid
        ${({ theme, error }) =>
          error ? theme.colors.error : theme.colors.primary};
    }
  }
`;
