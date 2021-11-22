import React, { ReactElement } from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import styled from 'styled-components';

export type TextFieldInputProps = {
  id?: string;
  name: string;
  label: string;
  error?: string;
  helperText?: string | undefined;
  hiddenLabel?: boolean | undefined;
  showErrorsInTheLabel?: boolean | undefined;
} & Omit<TextFieldProps, 'error'>;

function TextFieldInput({
  id,
  name,
  error = '',
  helperText,
  value,
  hiddenLabel = !value,
  showErrorsInTheLabel = true,
  ...rest
}: TextFieldInputProps): ReactElement {
  const hasError = !!error;

  return (
    <TextField
      id={id || name}
      name={name}
      value={value}
      helperText={hasError ? error : helperText}
      error={hasError}
      color="primary"
      variant="filled"
      hiddenLabel={hiddenLabel}
      showErrorsInTheLabel={showErrorsInTheLabel}
      InputLabelProps={{
        ...rest.InputLabelProps,
        shrink: hiddenLabel || (error && showErrorsInTheLabel) || undefined,
      }}
      {...rest}
    />
  );
}

type StyledTextFieldProps = {
  showErrorsInTheLabel?: boolean | undefined;
} & TextFieldProps;

const TextField = styled(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ showErrorsInTheLabel, ...props }: StyledTextFieldProps) => (
    <TextFieldMui {...props} />
  )
)<TextFieldProps>`
  && {
    width: 400px;

    .MuiFilledInput-input {
      cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
    }

    .MuiFormLabel-root.Mui-focused {
      color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.primary};
    }

    .MuiInputLabel-filled {
      color: ${({ theme, error, disabled }) =>
        error
          ? theme.colors.error
          : disabled
          ? theme.colors.disabled
          : theme.colors.primary};
    }

    .MuiFilledInput-underline:before {
      border-bottom: 0;
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid
        ${({ theme, error }) =>
          error ? theme.colors.error : theme.colors.primary};
    }

    .MuiInputBase-input {
      text-overflow: ellipsis;
      letter-spacing: 0.5px;
    }

    .MuiInputLabel-root {
      ${({ hiddenLabel, error, showErrorsInTheLabel }) =>
        hiddenLabel || (error && showErrorsInTheLabel)
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
      ${({ error, showErrorsInTheLabel }) =>
        error && showErrorsInTheLabel
          ? `position: absolute; top: 5px; margin-left: 12px;`
          : ''}
    }

    .MuiInputBase-input {
      ${({ error, showErrorsInTheLabel }) =>
        error && showErrorsInTheLabel ? ' padding: 27px 12px 10px;' : ''}
    }
  }
`;

export default TextFieldInput;
