import React from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  readOnly?: boolean;
  meta?: {
    error?: string;
  };
  input?: React.InputHTMLAttributes<HTMLInputElement>; // added for compatibility with react-final-form
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
} & React.InputHTMLAttributes<HTMLInputElement>;

type Color = '';

const CustomTextField = styled(({ ...props }: TextFieldProps) => (
  <TextFieldMui {...props} />
))<Props>`
  && {
    .MuiFilledInput-input {
      cursor: ${({ readOnly }) => (readOnly === true ? 'not-allowed' : 'auto')};
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
  disabled,
  readOnly,
  label,
  startAdornment,
  endAdornment,
  ...rest
}: Props) {
  const customProps = {
    error: meta && !!meta.error,
    label: (meta && meta.error) || label,
    variant: 'filled',
    InputProps: {
      readOnly,
      startAdornment: startAdornment ? (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ) : null,
      endAdornment: endAdornment ? (
        <InputAdornment position="start">{endAdornment}</InputAdornment>
      ) : null
    },
    disabled: readOnly,
    readOnly: readOnly
  };

  const getCheckboxForReactFinalForm = () => {
    const { name, value, ...inputRest } = input!;
    return (
      <CustomTextField
        {...rest}
        {...customProps}
        {...inputRest}
        name={name}
        checked={!!value}
        color="primary"
      />
    );
  };

  return input ? (
    getCheckboxForReactFinalForm()
  ) : (
    <CustomTextField
      {...customProps}
      value={value}
      color="primary"
      onChange={onChange}
    />
  );
}

export default TextField;
