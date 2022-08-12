import TextFieldInput from '.';
import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '../..';
import { Switch } from '..';
import { Typography } from '@material-ui/core';

export default {
  title: 'Inputs/TextFieldInput',
  component: TextFieldInput,
  parameters: {
    componentSubtitle: 'TextField field input with several variants',
  },
};

export const SimpleTextField = (args: any): React.ReactElement => {
  const [value, setValue] = useState<string>('');

  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      placeholder="TextFieldInput with default values"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...args}
    />
  );
};

export const TextFieldWithErrorsInTheLabel = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(true);
  const [hiddenLabel, setHiddenLabel] = useState<boolean>(false);
  const [showErrorsInTheLabel, setShowErrorsInTheLabel] =
    useState<boolean>(false);

  const error = 'This field has an error';

  return (
    <>
      <Typography>
        <Switch checked={hasError} onChange={setHasError} />
        An Error is present
      </Typography>
      <Typography>
        <Switch checked={hiddenLabel} onChange={setHiddenLabel} /> Hide Label
      </Typography>
      <Typography>
        <Switch
          checked={showErrorsInTheLabel}
          onChange={setShowErrorsInTheLabel}
        />
        Show Errors in The Label
      </Typography>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        hiddenLabel={hiddenLabel}
        showErrorsInTheLabel={showErrorsInTheLabel}
        error={hasError ? error : ''}
        placeholder={'You can visually hide the label'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const TextFieldWithErrors = (): React.ReactElement => {
  const [value, setValue] = useState<string>('this field has an error');

  const error = 'this field has an error';

  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      value={value}
      error={error}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const DisabledTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('this field is disabled');
  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      value={value}
      disabled
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const NumberTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('100');
  return (
    <TextFieldInput
      id="standard-NumberTextFieldInput"
      label="Number"
      name="NumberTextFieldInput"
      value={value}
      type="number"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const StartAdornmentTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  // see https://mui.com/components/text-fields/#input-adornments for more details
  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      value={value}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon size="md" type="assets" />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const EndAdornmentTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  // see https://mui.com/components/text-fields/#input-adornments for more details
  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Icon size="md" type="assets" />
          </InputAdornment>
        ),
      }}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const TextFieldWithHiddenLabel = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  const [hiddenLabel, setHiddenLabel] = useState<boolean>(true);
  return (
    <>
      <Typography>
        Hide Label: <Switch checked={hiddenLabel} onChange={setHiddenLabel} />
      </Typography>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        hiddenLabel={hiddenLabel}
        placeholder={'You can visually hide the label'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const FullWidthTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  return (
    <div style={{ width: '300px' }}>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        placeholder="TextFieldInput with default values"
        value={value}
        fullWidth
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const HelperText = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  return (
    <TextFieldInput
      id="standard-TextFieldInput"
      label="TextFieldInput"
      name="TextFieldInput"
      placeholder="TextFieldInput with default values"
      value={value}
      helperText="This is a helper text"
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
