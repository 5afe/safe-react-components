import React from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import styled from 'styled-components';

type Props = {
  value: string;
  label: string;
  readOnly?: boolean;
  meta?: {
    error?: string;
  };
  input?: React.InputHTMLAttributes<HTMLInputElement>; // added for compatibility with react-final-form
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomTextField = styled((props: TextFieldProps) => (
  <TextFieldMui {...props} />
))<Props>`
  && {
    width: 400px;

    .MuiFilledInput-input {
      cursor: ${({ readOnly }) => (readOnly === true ? 'not-allowed' : 'auto')};
    }

    .MuiFilledInput-root {
      background-color: ${({ theme }) => theme.colors.inputField};
    }

    .MuiFormLabel-root.Mui-focused {
      color: ${({ theme, error }) =>
        error ? theme.colors.error : theme.colors.primary};
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid
        ${({ theme, error }) =>
          error ? theme.colors.error : theme.colors.primary};
    }
  }
`;

function TextField({
  input,
  value,
  onChange,
  meta,
  readOnly,
  label,
  startAdornment,
  endAdornment,
  className,
  ...rest
}: Props): React.ReactElement {
  const customProps = {
    error: meta && !!meta.error,
    label: (meta && meta.error) || label,
    variant: 'filled' as const,
    InputProps: {
      readOnly,
      startAdornment: startAdornment ? (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ) : null,
      endAdornment: endAdornment ? (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ) : null,
    },
    disabled: readOnly,
    readOnly: readOnly,
  };

  if (input) {
    const { name, value, ...inputRest } = input;
    return (
      <CustomTextField
        {...rest}
        {...customProps}
        inputProps={inputRest}
        className={className}
        size={undefined}
        name={name}
        checked={!!value}
        color="primary"
        value={value as string}
      />
    );
  }

  return (
    <CustomTextField
      {...rest}
      size={undefined}
      {...customProps}
      className={className}
      value={value}
      color="primary"
      onChange={onChange}
    />
  );
}

export default TextField;
