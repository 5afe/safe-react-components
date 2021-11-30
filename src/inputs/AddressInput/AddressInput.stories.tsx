import React, { useState, useEffect, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  InputAdornment,
  Typography,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import styled from 'styled-components';
import CheckCircle from '@material-ui/icons/CheckCircle';
import QrReader from 'react-qr-reader';

import AddressInput from './index';
import { isValidAddress, isValidEnsName } from '../../utils/address';
import { Select, Switch, TextFieldInput } from '..';
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
  { id: 'eth', label: 'Mainnet (eth:)' },
  { id: 'rin', label: 'Rinkeby (rin:)' },
  { id: 'vt', label: 'Volta (vt:)' },
];

export const SimpleAddressInput = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('');
  const onChangeAddress = useCallback((address) => setAddress(address), []);

  const [currentNetworkPrefix, setCurrentNetworkPrefix] = useState('rin');

  const [openQRModal, setOpenQRModal] = useState(false);

  const [showNetworkPrefix, setShowNetworkPrefix] = useState<boolean>(true);

  const [hiddenLabel, setHiddenLabel] = useState<boolean>(true);

  const [showErrors, setShowErrors] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const inValidAddressError = !isValidAddress(address) ? 'Invalid Address' : '';
  const inValidNetworkError = address.includes(':')
    ? 'The chain prefix must match the current network'
    : '';

  const error =
    address && showErrors ? inValidNetworkError || inValidAddressError : '';

  // fake ENS Resolution
  const getAddressFromDomain = () =>
    new Promise<string>((resolve) => {
      setTimeout(
        () => resolve('0x83eC7B0506556a7749306D69681aDbDbd08f0769'),
        2000
      );
    });

  return (
    <div>
      <StyledText>Network Settings:</StyledText>
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
      <StyledText>
        <Switch checked={showErrors} onChange={setShowErrors} />
        Show Errors
      </StyledText>
      <StyledText>
        <Switch checked={isLoading} onChange={setIsLoading} />
        Show Loading spinner (also disables the Input)
      </StyledText>
      <StyledText>
        <Switch checked={isDisabled} onChange={setIsDisabled} />
        Input disabled
      </StyledText>
      <StyledText>
        <Switch checked={hiddenLabel} onChange={setHiddenLabel} />
        Hide AddressInput Label (Only when input is empty)
      </StyledText>
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
          showLoadingSpinner={isLoading}
          disabled={isDisabled || isLoading}
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
      <StyledText>Address In the State:</StyledText>
      <CodeFormat>{address || ' '}</CodeFormat>
      {/* Load QR Code Dialog */}
      <Dialog
        onClose={() => setOpenQRModal(false)}
        aria-labelledby="Load Address from QR Code Dialog"
        open={openQRModal}>
        <DialogTitle>Load Address from QR Code</DialogTitle>
        <DialogContent style={{ minWidth: '500px' }}>
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
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const AddressInputWithENSResolution = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const onChangeAddress = useCallback((address) => setAddress(address), []);

  const [customENSThrottleDelay, setCustomENSThrottleDelay] = useState<
    number | undefined
  >(2000);

  // Fake ENS Resolution
  const getAddressFromDomain = useCallback(
    () =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => {
          if (showError) {
            setError('Error in the ENS Resolution Network Call');
            reject();
          } else {
            setError('');
            resolve('0x83eC7B0506556a7749306D69681aDbDbd08f0769');
          }
        }, 2500);
      }),
    [showError]
  );

  // we clean the error when address changes...
  useEffect(() => {
    setError('');
  }, [address]);

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <StyledText>
        <Switch checked={showError} onChange={setShowError} />
        Simulate an error in the resolver ENS Network call
      </StyledText>
      <div
        style={{
          marginTop: '8px',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <AddressInput
          label="Address with ENS"
          hiddenLabel={false}
          name="address"
          placeholder={'Type safe.test to check ENS resolution'}
          networkPrefix="rin"
          showNetworkPrefix={true}
          error={address && error}
          address={address}
          helperText={'Type safe.test to check ENS resolution!'}
          disabled={!customENSThrottleDelay}
          onChangeAddress={onChangeAddress}
          getAddressFromDomain={getAddressFromDomain}
          customENSThrottleDelay={customENSThrottleDelay}
        />
        {address && (
          <LoaderIndicator
            completeValue={customENSThrottleDelay}
            address={address}
            showError={showError}
          />
        )}
      </div>
      <div style={{ marginTop: '8px', minHeight: '80px' }}>
        {/* custom Delay for ENS resolution*/}
        <TextFieldInput
          name={'customENSThrottleDelay'}
          label={'custom Delay (in milliseconds)'}
          placeholder={'Customize your throttle delay for ENS resolution!'}
          helperText={
            !!customENSThrottleDelay &&
            'Customize your throttle delay for ENS resolution!'
          }
          value={customENSThrottleDelay}
          type="number"
          onChange={(e) =>
            setCustomENSThrottleDelay(e.target.value && Number(e.target.value))
          }
        />
      </div>
      {/* Address In the State */}
      <StyledText>Address In the State:</StyledText>
      <CodeFormat>{address || ' '}</CodeFormat>
    </form>
  );
};

export const SafeAddressInputValidation = (): React.ReactElement => {
  const [address, setAddress] = useState<string>('');
  const onChangeAddress = useCallback((address) => setAddress(address), []);
  const [isValidSafeAddress, setIsValidSafeAddress] = useState<boolean>(false);
  const [showLoadingSpinner, setShowLoadingSpinner] = useState<boolean>(false);

  // Fake SafeAddress checker
  useEffect(() => {
    setShowLoadingSpinner(true);
    setIsValidSafeAddress(false);

    const timeId = setTimeout(() => {
      const isValidSafeAddress =
        address === '0x83eC7B0506556a7749306D69681aDbDbd08f0769';
      setIsValidSafeAddress(isValidSafeAddress);
      setShowLoadingSpinner(false);
    }, 1500);

    return () => {
      clearTimeout(timeId);
    };
  }, [address]);

  const error = 'Address given is not a valid Safe address';

  const showError = address && !isValidSafeAddress && !showLoadingSpinner;

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <StyledText>You can customize validations</StyledText>
      <StyledText>valid values:</StyledText>
      <CodeFormat>
        0x83eC7B0506556a7749306D69681aDbDbd08f0769 &amp;
        rin:0x83eC7B0506556a7749306D69681aDbDbd08f0769
      </CodeFormat>
      <StyledText></StyledText>
      <AddressInput
        label="Safe Address"
        name="safeAddress"
        networkPrefix="rin"
        placeholder={'Type the valid safe address'}
        hiddenLabel={false}
        showErrorsInTheLabel={false}
        helperText="Valid safe: 0x83eC7B0506556a7749306D69681aDbDbd08f0769"
        showNetworkPrefix={false}
        error={showError ? error : ''}
        address={address}
        onChangeAddress={onChangeAddress}
        showLoadingSpinner={showLoadingSpinner}
        InputProps={{
          endAdornment: isValidSafeAddress && (
            <InputAdornment position="end">
              <CheckIconAddressAdornment />
            </InputAdornment>
          ),
        }}
      />
      {/* Address In the State */}
      <StyledText>Address In the State:</StyledText>
      <CodeFormat>{address || ' '}</CodeFormat>
    </form>
  );
};

export const AddressInputWithSimpleAddressValidation =
  (): React.ReactElement => {
    const [address, setAddress] = useState<string>('');
    const onChangeAddress = useCallback((address) => setAddress(address), []);
    const [hasError, setHasError] = useState<boolean>();

    useEffect(() => {
      setHasError(address && !isValidAddress(address));
    }, [address]);

    const error = 'Invalid Address';

    return (
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <AddressInput
          label="Address"
          name="address"
          placeholder={'Ethereum address'}
          networkPrefix="rin"
          error={hasError ? error : ''}
          address={address}
          onChangeAddress={onChangeAddress}
        />
        {/* Address In the State */}
        <StyledText>Address In the State:</StyledText>
        <CodeFormat>{address || ' '}</CodeFormat>
      </form>
    );
  };

export const AddressInputWithoutPrefix = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const onChangeAddress = useCallback((address) => setAddress(address), []);

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <AddressInput
        label="Address"
        name="address"
        placeholder={'Ethereum address'}
        address={address}
        onChangeAddress={onChangeAddress}
      />
      {/* Address In the State */}
      <StyledText>Address In the State:</StyledText>
      <CodeFormat>{address || ' '}</CodeFormat>
    </form>
  );
};

export const AddressInputLoading = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const onChangeAddress = useCallback((address) => setAddress(address), []);

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
        onChangeAddress={onChangeAddress}
      />
    </form>
  );
};

export const AddressInputWithAdornment = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const onChangeAddress = useCallback((address) => setAddress(address), []);

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
        onChangeAddress={onChangeAddress}
      />
    </form>
  );
};

export const AddressInputDisabled = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const onChangeAddress = useCallback((address) => setAddress(address), []);

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
        onChangeAddress={onChangeAddress}
      />
    </form>
  );
};

export const AddressInputWithErrors = (): React.ReactElement => {
  const [address, setAddress] = useState<string>(
    '0x83eC7B0506556a7749306D69681aDbDbd08f0769'
  );
  const onChangeAddress = useCallback((address) => setAddress(address), []);

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
        onChangeAddress={onChangeAddress}
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

const StyledText = styled(Typography)`
  && {
    margin-top: 8px;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  && {
    margin-left: 16px;
    margin-bottom: 18px;
  }
`;

// Visual indicator for custom Throttle value in ENS resolver
function LoaderIndicator({ completeValue, address, showError }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100
          ? prevProgress
          : prevProgress + 100 / (completeValue / 200)
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [completeValue, address]);

  useEffect(() => {
    const hasToRestProgress =
      address !== '0x83eC7B0506556a7749306D69681aDbDbd08f0769';
    if (hasToRestProgress) {
      setProgress(0);
    }
  }, [address, showError]);

  const isComplete = progress >= 100;

  const alreadyResolved =
    address === '0x83eC7B0506556a7749306D69681aDbDbd08f0769';

  if (alreadyResolved || !isValidEnsName(address) || isComplete) {
    return null;
  }

  return <StyledCircularProgress variant="determinate" value={progress} />;
}
