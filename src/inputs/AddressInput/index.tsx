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
  showNetworkPrefix = true,
  disabled,
  onChangeAddress,
  getAddressFromDomain,
  showLoadingSpinner,
  InputProps,
  inputProps,
  hiddenLabel = true,
  ...rest
}: AddressInputProps): ReactElement {
  const [isLoadingENSResolution, setIsLoadingENSResolution] = useState(false);
  const defaulInputValue = addPrefix(address, networkPrefix, showNetworkPrefix);
  const inputRef = useRef({ value: defaulInputValue });
  const throttle = useThrottle();

  // we include the network prefix in the input if showNetworkPrefix=true
  const updateInputValue = useCallback(
    (value = '') => {
      const checksumAddress = checksumValidAddress(value);
      inputRef.current.value = addPrefix(
        checksumAddress,
        networkPrefix,
        showNetworkPrefix
      );
    },
    [networkPrefix, showNetworkPrefix]
  );

  // ENS name resolution
  useEffect(() => {
    const resolveDomainName = async (ENSName: string) => {
      try {
        setIsLoadingENSResolution(true);
        const address = (await getAddressFromDomain?.(ENSName)) as string;
        onChangeAddress(checksumValidAddress(address));
        // we also update the input value
        updateInputValue(address);
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
    const inputValue = inputRef.current.value;
    const inputWithoutPrefix = getAddressWithoutNetworkPrefix(inputValue);
    const addressWithoutPrefix = getAddressWithoutNetworkPrefix(address);
    const inputPrefix = getNetworkPrefix(inputValue);
    const addressPrefix = getNetworkPrefix(address);

    const isNewAddressLoaded = inputWithoutPrefix !== addressWithoutPrefix;
    const isNewPrefixLoaded = addressPrefix && inputPrefix !== addressPrefix;

    // we check if we load a new address (both prefixed and unprefixed cases)
    if (isNewAddressLoaded || isNewPrefixLoaded) {
      // we update the input value
      updateInputValue(address);
    }
  }, [address, updateInputValue]);

  // we trim & checksum valid address typed by the user
  const updateAddressState = useCallback(
    (value) => {
      const inputValue = trimSpaces(value);

      const inputPrefix = getNetworkPrefix(inputValue);
      const inputWithoutPrefix = getAddressWithoutNetworkPrefix(inputValue);

      const isValidPrefix = networkPrefix === inputPrefix;

      if (isValidPrefix) {
        onChangeAddress(checksumValidAddress(inputWithoutPrefix));
      } else {
        onChangeAddress(checksumValidAddress(inputValue));
      }
    },
    [networkPrefix, onChangeAddress]
  );

  // when user switch the network we update the address state
  useEffect(() => {
    updateAddressState(inputRef.current.value);
  }, [networkPrefix, address, updateAddressState]);

  // when user types we update the address state
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    updateAddressState(e.target.value);
  }

  const isLoading = isLoadingENSResolution || showLoadingSpinner;

  return (
    <TextFieldInput
      name={name}
      hiddenLabel={!inputRef.current.value && hiddenLabel}
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

// we try to add the network prefix if its not present
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
