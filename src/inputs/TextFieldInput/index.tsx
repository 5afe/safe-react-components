import React, { ReactElement } from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import styled, { css } from 'styled-components';

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
  label,
  error = '',
  helperText,
  value,
  hiddenLabel,
  showErrorsInTheLabel,
  ...rest
}: TextFieldInputProps): ReactElement {
  const hasError = !!error;

  return (
    <TextField
      id={id || name}
      name={name}
      label={showErrorsInTheLabel && hasError ? error : label}
      value={value}
      helperText={hasError ? error : helperText}
      error={hasError}
      color="primary"
      variant="outlined"
      hiddenLabel={hiddenLabel}
      showErrorsInTheLabel={showErrorsInTheLabel}
      InputLabelProps={{
        ...rest.InputLabelProps,
        shrink: hiddenLabel || undefined,
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

    .MuiInputLabel-filled {
      color: ${({ theme, error, disabled }) =>
        error
          ? theme.colors.error
          : disabled
          ? theme.colors.disabled
          : theme.colors.primary};
    }

    .MuiFormLabel-root {
      color: ${({ theme }) => theme.colors.inputPlaceholder};
      &.MuiInputLabel-shrink {
        color: ${({ error, theme }) =>
          error ? theme.colors.error : theme.colors.inputText};
      }
    }

    .MuiInputLabel-root {
      ${({ hiddenLabel }) =>
        hiddenLabel
          ? `border: 0;
      border: 2px solid red;    
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;`
          : ''}

      .MuiInputBase-input {
        text-overflow: ellipsis;
        letter-spacing: 0.5px;
        ${({ error, showErrorsInTheLabel }) =>
          error && showErrorsInTheLabel ? ' padding: 27px 12px 10px;' : ''}
      }
    }

    .MuiInputBase-root {
      color: ${({ error, theme }) =>
        error ? theme.colors.error : theme.colors.inputText};
      input {
        &::placeholder {
          opacity: 1;
          color: ${({ theme }) => theme.colors.inputPlaceholder};
        }
      }
    }

    .MuiOutlinedInput-root {
      .MuiOutlinedInput-notchedOutline {
        ${({ hiddenLabel }) => (hiddenLabel ? 'top: 0' : '')};
        transition: border-color 0.2s ease-in-out;
        border: 2px solid
          ${({ error, disabled, theme, value }) =>
            error
              ? theme.colors.error
              : disabled
              ? theme.colors.inputBorder
              : value
              ? theme.colors.inputBorderHover
              : theme.colors.inputBorder};

        border-radius: 6px;

        legend {
          display: ${({ hiddenLabel }) => (hiddenLabel ? 'none' : 'block')};
        }
      }
      &:hover,
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-color: ${({ error, theme, disabled }) =>
            error
              ? theme.colors.error
              : disabled
              ? theme.colors.inputBorder
              : theme.colors.inputBorderHover};
        }
      }
    }

    .MuiFormHelperText-root.Mui-error {
      ${({ error, showErrorsInTheLabel }) =>
        error && showErrorsInTheLabel ? `display: none` : ''}
    }
  }
`;

export default TextFieldInput;
