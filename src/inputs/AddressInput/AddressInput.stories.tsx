import React, { useState, useEffect, useCallback } from 'react';
import { InputAdornment } from '@material-ui/core';
import styled from 'styled-components';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { Typography, IconButton } from '@material-ui/core';
import QrReader from 'react-qr-reader';

import AddressInput from './index';
import { isValidAddress } from '../../utils/address';
import { Select, Switch } from '..';
import { Icon } from '../..';

export default {
  title: 'Inputs/AddressInput',
  component: AddressInput,
  parameters: {
    componentSubtitle: 'Address field input with several variants',
  },
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

const networks = [
  { id: 'eth', label: 'Mainnet' },
  { id: 'rin', label: 'Rinkeby' },
  { id: 'vt', label: 'Volta' },
];

export const SimpleAddressInput = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('');
  const onChangeAddress = useCallback((address) => setAddress(address), []);

  const [currentNetworkPrefix, setCurrentNetworkPrefix] = useState('rin');

  const [openQRModal, setOpenQRModal] = useState(false);

  const [showNetworkPrefix, setShowNetworkPrefix] = useState<boolean>(true);

  const [hiddenLabel, setHiddenLabel] = useState<boolean>(true);

  const [showErrors, setShowErrors] = useState<boolean>(true);

  const inValidAddressError = !isValidAddress(address) ? 'Invalid Address' : '';
  const inValidNetworkError = address.includes(':')
    ? 'The chain prefix must match the current network'
    : '';

  const error =
    address && showErrors ? inValidNetworkError || inValidAddressError : '';

  // ENS Resolution
  const getAddressFromDomain = () =>
    new Promise<string>((resolve) => {
      setTimeout(
        () => resolve('0x83eC7B0506556a7749306D69681aDbDbd08f0769'),
        2000
      );
    });

  // TODO: ADD A showLoadingSpinner STATE
  console.log('currentNetworkPrefix: ', currentNetworkPrefix);

  return (
    <div>
      <Typography>Network Settings</Typography>
      <Typography>
        <Switch checked={showNetworkPrefix} onChange={setShowNetworkPrefix} />
        Show Network Prefix
      </Typography>
      <Select
        items={networks}
        activeItemId={currentNetworkPrefix}
        onItemClick={(networkPrefix) => {
          setCurrentNetworkPrefix(networkPrefix);
        }}
      />

      <Typography style={{ marginBottom: '16px' }}>
        <Switch checked={showErrors} onChange={setShowErrors} />
        Show Errors
      </Typography>
      <Typography style={{ marginBottom: '16px' }}>
        <Switch checked={hiddenLabel} onChange={setHiddenLabel} />
        Hidden Input Label (only works when empty input value)
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
        style={{ display: 'flex' }}>
        <AddressInput
          label="Address"
          name="address"
          placeholder={'Ethereum address'}
          address={address}
          onChangeAddress={onChangeAddress}
          getAddressFromDomain={getAddressFromDomain}
          hiddenLabel={hiddenLabel}
          error={error}
          networkPrefix={currentNetworkPrefix}
          showNetworkPrefix={showNetworkPrefix}
        />
        <IconButton
          onClick={() => setOpenQRModal((openModal) => !openModal)}
          aria-label="load QR code">
          <Icon size="md" type="qrCode" />
        </IconButton>
      </form>
      {/* Address In the State */}
      <Typography>Address In the State:</Typography>
      <CodeFormat>{address || ' '}</CodeFormat>
      {openQRModal && (
        <QrReader
          delay={300}
          onError={() => {
            console.log('error:');
          }}
          onScan={(value) => {
            if (value) {
              setAddress(value);
              setOpenQRModal(false);
            }
          }}
          onImageLoad={(address) => setAddress(address)}
          style={{ width: '50%', margin: '0 auto' }}
        />
      )}
    </div>
  );
};

// export const SimpleAddressInput = (): React.ReactElement => {
//   const [address, setAddress] = useState<string>(
//     '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
//   );
//   const [showNetworkPrefix, setShowNetworkPrefix] = useState<boolean>(true);

//   const getAddressFromDomain = () =>
//     new Promise<string>((resolve) => {
//       setTimeout(
//         () => resolve('0x83eC7B0506556a7749306D69681aDbDbd08f0769'),
//         1200
//       );
//     });

//   return (
//     <form noValidate autoComplete="off" onSubmit={onSubmit}>
//       <Typography style={{ marginBottom: '16px' }}>
//         <Switch checked={showNetworkPrefix} onChange={setShowNetworkPrefix} />
//         Show Network Prefix (rin)
//       </Typography>
//       <AddressInput
//         id={'address-input'}
//         label="Ethereum Address"
//         name="address"
//         placeholder={'Ethereum address'}
//         showNetworkPrefix={showNetworkPrefix}
//         networkPrefix={'rin'}
//         address={address}
//         onChangeAddress={(address) => setAddress(address)}
//         getAddressFromDomain={getAddressFromDomain}
//       />
//       <Typography style={{ marginTop: '24px' }}>
//         Address value in the State:{' '}
//       </Typography>
//       <CodeFormat>{address}</CodeFormat>
//       <Typography style={{ marginTop: '16px' }}>
//         You can use ENS names (like safe.test) with the getAddressFromDomain
//         prop
//       </Typography>
//     </form>
//   );
// };

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
        placeholder={'Ethereum address'}
        showNetworkPrefix={true}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
      <pre>Address in the state: {address}</pre>
    </form>
  );
};

export const AddressInputWithValidation = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const [hasError, setHasError] = useState<boolean>(
    () => !isValidAddress(address)
  );

  useEffect(() => {
    setHasError(!isValidAddress(address));
  }, [address]);

  const error = 'Invalid Address';

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        placeholder={'Ethereum address'}
        networkPrefix="rin"
        showNetworkPrefix={false}
        error={hasError ? error : ''}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithoutPrefix = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        placeholder={'Ethereum address'}
        networkPrefix="rin"
        showNetworkPrefix={false}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithENSResolution = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  const getAddressFromDomain = () =>
    new Promise<string>((resolve) => {
      setTimeout(
        () => resolve('0x83eC7B0506556a7749306D69681aDbDbd08f0769'),
        2000
      );
    });

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        placeholder={'Ethereum address'}
        networkPrefix="rin"
        showNetworkPrefix={true}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
        getAddressFromDomain={getAddressFromDomain}
      />
      <CodeFormat>{address || ' '}</CodeFormat>
    </form>
  );
};

export const SafeAddressInputValidation = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const [isValidSafeAddress, setIsValidSafeAddress] = useState<boolean>(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>(false);

  // check if address is the SafeAddress
  useEffect(() => {
    setShowLoadingSpinner(true);
    setIsValidSafeAddress(false);

    const timeId = setTimeout(() => {
      const isValidSafeAddress =
        address === '0x83eC7B0506556a7749306D69681aDbDbd08f0769';
      setIsValidSafeAddress(isValidSafeAddress);
      setShowLoadingSpinner(false);
    }, 1200);

    return () => {
      clearTimeout(timeId);
    };
  }, [address]);

  const error = 'Address given is not a valid Safe address';

  const showError = !isValidSafeAddress && !showLoadingSpinner;

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Safe Address"
        name="safeAddress"
        networkPrefix="rin"
        placeholder={'Ethereum address'}
        showNetworkPrefix={false}
        error={showError ? error : ''}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
        showLoadingSpinner={showLoadingSpinner}
        InputProps={{
          endAdornment: isValidSafeAddress && (
            <InputAdornment position="end">
              <CheckIconAddressAdornment />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export const AddressInputLoading = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        placeholder={'Ethereum address'}
        showLoadingSpinner
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithAdornment = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner={false}
        placeholder={'Ethereum address'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CheckIconAddressAdornment />
            </InputAdornment>
          ),
        }}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputDisabled = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        showLoadingSpinner={false}
        disabled
        placeholder={'Ethereum address'}
        address={address}
        onChangeAddress={(address) => setAddress(address)}
      />
    </form>
  );
};

export const AddressInputWithErrors = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        networkPrefix="rin"
        showNetworkPrefix={false}
        placeholder={'Ethereum address'}
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

const CodeFormat = styled.pre`
  display: inline-block;
  background-color: lightgrey;
  margin: 0;
  margin-top: 8px;
  padding: 8px;
  min-width: 500px;
  border-radius: 4px;
`;

// TODO: Add an example with react final form
