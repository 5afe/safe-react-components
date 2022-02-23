import TextFieldInput from '.';
import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Icon } from '../..';
import { Switch } from '..';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default {
  title: 'Inputs/TextFieldInput',
  component: TextFieldInput,
  parameters: {
    componentSubtitle: 'TextField field input with several variants',
  },
};

const onSubmit = (e: React.FormEvent) => e.preventDefault();

export const SimpleTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        placeholder="TextFieldInput with default values"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
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
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
    </form>
  );
};

const StyledTextField = styled(TextFieldInput)`
  && {
    .MuiFilledInput-root {
      background-color: lightgreen;
      width: 200px;
      transition: width 1s ease-out;
    }

    .MuiFilledInput-root.Mui-focused {
      width: 400px;
    }

    .MuiFormLabel-root.Mui-focused {
      color: ${({ error, theme }) =>
        error ? theme.colors.error : 'darkgreen'};
    }

    .MuiInputLabel-filled {
      color: ${({ theme, error }) => (error ? theme.colors.error : 'purple')};
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid
        ${({ theme, error }) => (error ? theme.colors.error : 'orange')};
    }
  }
`;

export const TextFieldWithErrors = (): React.ReactElement => {
  const [value, setValue] = useState<string>('this field has an error');

  const error = 'this field has an error';

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        value={value}
        error={error}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const DisabledTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('this field is disabled');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextFieldInput
        id="standard-TextFieldInput"
        label="TextFieldInput"
        name="TextFieldInput"
        value={value}
        disabled
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const NumberTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('100');
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextFieldInput
        id="standard-NumberTextFieldInput"
        label="Number"
        name="NumberTextFieldInput"
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const StartAdornmentTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  // see https://mui.com/components/text-fields/#input-adornments for more details
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
    </form>
  );
};

export const EndAdornmentTextField = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  // see https://mui.com/components/text-fields/#input-adornments for more details
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
    </form>
  );
};

export const TextFieldWithHiddenLabel = (): React.ReactElement => {
  const [value, setValue] = useState<string>('');
  const [hiddenLabel, setHiddenLabel] = useState<boolean>(true);
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
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
    </form>
  );
};
