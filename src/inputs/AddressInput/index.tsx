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

  // we update the input value only in 2 cases: ENS resolution and Load QR code
  // TODO: ALSO WHEN networkPrefix changes?
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

  // ENS name resolution
  useEffect(() => {
    const resolveDomainName = async (ENSName: string) => {
      try {
        setIsLoadingENSResolution(true);
        const address = (await getAddressFromDomain?.(ENSName)) as string;
        // TODO: ADD PREFIX HERE ??? CHECK SEE showNetworkPrefix PREFERENCES
        onChangeAddress(checksumValidAddress(address));
        // we also update the input value
        updateInputValue(address, true);
      } catch (e) {
        onChangeAddress(ENSName);
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
    onChangeAddress,
    throttle,
    updateInputValue,
  ]);

  // if address or prefix changes from outside (Load a QR code) we also update the input value
  useEffect(() => {
    const inputValue = inputRef.current?.value;
    const inputWithoutPrefix = getAddressWithoutNetworkPrefix(inputValue);
    const addressWithoutPrefix = getAddressWithoutNetworkPrefix(address);
    const inputPrefix = getNetworkPrefix(inputValue);
    const addressPrefix = getNetworkPrefix(address);

    const isNewAddressLoaded = inputWithoutPrefix !== addressWithoutPrefix;
    const isNewPrefixLoaded = addressPrefix && inputPrefix !== addressPrefix;

    // we check if we load a new address (both prefixed and unprefixed)
    if (isNewAddressLoaded || isNewPrefixLoaded) {
      // we also update the input value
      updateInputValue(address);
    }
  }, [address, updateInputValue]);

  // TODO: REMOVE USE REF AND THIS USECALLBACK
  // we trim & checksum valid address typed by the user
  const updateAddressState = useCallback(
    (value) => {
      const inputValue = trimSpaces(value);

      const inputPrefix = getNetworkPrefix(inputValue);
      const inputWithoutPrefix = getAddressWithoutNetworkPrefix(inputValue);

      const isValidPrefix = networkPrefix === inputPrefix;

      console.log('HOLIIII');

      if (isValidPrefix) {
        onChangeAddress(checksumValidAddress(inputWithoutPrefix));
      } else {
        onChangeAddress(checksumValidAddress(inputValue));
      }
    },
    [networkPrefix, onChangeAddress]
  );

  // when networkPrefix changes (user switch the network) we update only the state
  useEffect(() => {
    updateAddressState(inputRef.current?.value);
  }, [address, updateAddressState]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    updateAddressState(e.target.value);
  }

  const isLoading = isLoadingENSResolution || showLoadingSpinner;

  const defaultValue = addPrefix(address, networkPrefix, showNetworkPrefix);

  return (
    <TextFieldInput
      name={name}
      // TODO: FIX THIS
      // hiddenLabel={!inputRef.current?.value}
      defaultValue={defaultValue}
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
