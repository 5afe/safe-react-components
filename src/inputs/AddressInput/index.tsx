import React, {
  ReactElement,
  useState,
  ChangeEvent,
  useEffect,
  useCallback,
  useRef,
} from 'react';
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
  inputProps,
  ...rest
}: AddressInputProps): ReactElement {
  const [isLoadingENSResolution, setIsLoadingENSResolution] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const throttle = useThrottle();

  const updateInputValue = useCallback(
    (value = '', addNetworkPrefix = false) => {
      if (inputRef.current) {
        const checksumAddress = checksumValidAddress(value);
        inputRef.current.value = addNetworkPrefix
          ? addPrefix(checksumAddress, networkPrefix, showNetworkPrefix)
          : checksumAddress;
      }
    },
    [networkPrefix, showNetworkPrefix]
  );

  // checksum valid Address
  const updateAddress = useCallback(
    (value = '') => {
      onChangeAddress(checksumValidAddress(value));
    },
    [onChangeAddress]
  );

  // ENS name resolution
  useEffect(() => {
    const resolveDomainName = async (ENSName: string) => {
      try {
        setIsLoadingENSResolution(true);
        const address = (await getAddressFromDomain?.(ENSName)) as string;
        // TODO: ADD PREFIX HERE ??? SEE PREFERENCES
        updateAddress(address);
        updateInputValue(address, true);
      } catch (e) {
        updateAddress(ENSName);
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
    updateAddress,
    throttle,
    updateInputValue,
  ]);

  // if address changes from outside (like QRs code) we update the input value
  useEffect(() => {
    const inputValue = inputRef.current?.value;
    const inputWithoutPrefix = getAddressWithoutNetworkPrefix(inputValue);
    const addressWithoutPrefix = getAddressWithoutNetworkPrefix(address);
    const hasNewValue = inputWithoutPrefix !== addressWithoutPrefix;

    if (hasNewValue) {
      updateInputValue(address);

      const prefix = getNetworkPrefix(address);
      const isValidPrefix = prefix === networkPrefix;
      if (isValidPrefix) {
        updateAddress(addressWithoutPrefix);
      } else {
        updateAddress(address);
      }
    }
  }, [address, updateAddress, networkPrefix, updateInputValue]);

  // we update the address in the state without the valid prefix when user inputs a value
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const value = trimSpaces(e.target.value);

    const prefix = getNetworkPrefix(value);
    const address = getAddressWithoutNetworkPrefix(value);

    const isValidPrefix =
      value.includes(':') && !value.startsWith(':') && prefix === networkPrefix;

    if (isValidPrefix) {
      updateAddress(address);
    } else {
      updateAddress(value);
    }
  }

  const isLoading = isLoadingENSResolution || showLoadingSpinner;

  return (
    <TextFieldInput
      name={name}
      defaultValue={addPrefix(address, networkPrefix, showNetworkPrefix)}
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
      inputProps={{
        ...inputProps,
        ref: inputRef,
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

// we only checksum valid addresses
function checksumValidAddress(address: string) {
  if (isValidAddress(address) && !isChecksumAddress(address)) {
    return checksumAddress(address);
  }

  return address;
}

// we try to add the network prefix by default
function addPrefix(
  address: string,
  networkPrefix: string | undefined,
  showNetworkPrefix = false
): string {
  if (!address) {
    return '';
  }

  if (showNetworkPrefix && networkPrefix) {
    const hasPrefix = !!getNetworkPrefix(address);

    // if the address has not prefix we add it by default
    if (!hasPrefix) {
      return addNetworkPrefix(address, networkPrefix);
    }
  }

  return address;
}
