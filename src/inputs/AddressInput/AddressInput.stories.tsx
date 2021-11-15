import { InputAdornment } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckCircle from '@material-ui/icons/CheckCircle';

import AddressInput from './index';
import { isValidAddress } from '../../utils/address';

export default {
  title: 'Inputs/AddressInput',
  component: AddressInput,
  parameters: {
    componentSubtitle: 'Address field input with several variants',
  },
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

export const SimpleAddressInput = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        id={'address-input'}
        label="Address"
        name="address"
        placeholder={'Ethereum address'}
        showNetworkPrefix={false}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithNetworkPrefix = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Prefixed Address"
        name="prefixed-address"
        networkPrefix="rin"
        showNetworkPrefix={true}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
      <pre>Address: {address}</pre>
    </form>
  );
};

export const AddressInputWithoutPrefix = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithENSResolution = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  async function getAddressFromDomain(name: string) {
    if (name === 'safe.test') {
      return '0x83eC7B0506556a7749306D69681aDbDbd08f0769';
    } else {
      throw '404';
    }
  }
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={true}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
        getAddressFromDomain={getAddressFromDomain}
      />
    </form>
  );
};

export const SafeAddressInputValidation = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const [isValidSafeAddress, setIsValidSafeAddress] = useState<boolean>(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>(false);

  async function checkSafeAddress(address: string) {
    const isValidAddressValue = isValidAddress(address);

    if (isValidAddressValue) {
      setShowLoadingSpinner(true);
      setTimeout(() => {
        const isValidSafeAddress =
          address === '0x83eC7B0506556a7749306D69681aDbDbd08f0769';
        setIsValidSafeAddress(isValidSafeAddress);
        setShowLoadingSpinner(false);
      }, 2000);
    } else {
      setIsValidSafeAddress(false);
      setShowLoadingSpinner(false);
    }
  }

  useEffect(() => {
    checkSafeAddress(address);
  }, [address]);

  const error = 'Address given is not a valid Safe address';

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Safe Address"
        name="safeAddress"
        networkPrefix="rin"
        showNetworkPrefix={false}
        error={!isValidSafeAddress ? error : ''}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
        showLoadingSpinner={showLoadingSpinner}
        inputAdornment={
          isValidSafeAddress && (
            <InputAdornment position="end">
              <CheckIconAddressAdornment />
            </InputAdornment>
          )
        }
      />
    </form>
  );
};

export const AddressInputLoading = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithAdornment = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner={false}
        inputAdornment={
          <InputAdornment position="end">
            <CheckIconAddressAdornment />
          </InputAdornment>
        }
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputDisabled = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner={false}
        disabled
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithErrors = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('0x123');

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner={false}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
        error={'Invalid Address'}
      />
    </form>
  );
};

const CheckIconAddressAdornment = styled(CheckCircle)`
  color: #03ae60;
  height: 20px;
`;
