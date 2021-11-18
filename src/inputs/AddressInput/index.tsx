import React, { ReactElement, useState, ChangeEvent, useEffect } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';

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
import useThrottle from '../../utils/useThrottle';
import TextFieldInput, { TextFieldInputProps } from '../TextFieldInput';

type AddressInputProps = {
  name: string;
  address: string;
  networkPrefix?: string;
  showNetworkPrefix?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  onChangeAddress: (address: string) => void;
  getAddressFromDomain?: (name: string) => Promise<string>;
  showLoadingSpinner?: boolean;
} & TextFieldInputProps;

function AddressInput({
  name,
  address,
  networkPrefix,
  showNetworkPrefix,
  disabled,
  onChangeAddress,
  getAddressFromDomain,
  showLoadingSpinner,
  InputProps,
  ...rest
}: AddressInputProps): ReactElement {
  const [prefix, setPrefix] = useState(networkPrefix);
  const [isLoadingENSResolution, setIsLoadingENSResolution] = useState(false);

  const throttle = useThrottle();

  // checksum valid addresses
  useEffect(() => {
    if (isValidAddress(address) && !isChecksumAddress(address)) {
      onChangeAddress(checksumAddress(address));
    }
  }, [address, onChangeAddress]);

  // ENS resolution
  useEffect(() => {
    const resolveDomainName = async (ENSName: string) => {
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
    };

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
    throttle,
  ]);

  // Network prefix
  useEffect(() => {
    setPrefix(networkPrefix);
  }, [networkPrefix]);

  useEffect(() => {
    if (showNetworkPrefix) {
      setPrefix(networkPrefix);
    } else {
      setPrefix('');
    }
  }, [showNetworkPrefix, networkPrefix]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
  };

  const value = addNetworkPrefix(address, prefix);

  const isLoading = isLoadingENSResolution || showLoadingSpinner;

  return (
    <TextFieldInput
      name={name}
      value={value}
      disabled={disabled || isLoadingENSResolution}
      onChange={onChange}
      InputProps={{
        ...InputProps,
        // if isLoading we show a custom loader adornment
        endAdornment: isLoading ? (
          <LoaderSpinnerAdornment />
        ) : (
          InputProps?.endAdornment
        ),
      }}
      spellCheck={false}
      {...rest}
    />
  );
}

export default AddressInput;

function LoaderSpinnerAdornment() {
  return (
    <InputAdornment position="end">
      <CircularProgress size="16px" />
    </InputAdornment>
  );
}
