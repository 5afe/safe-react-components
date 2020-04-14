import React from 'react';
import TextFieldMui from '@material-ui/core/TextField';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  readOnly?: boolean;
  meta?: any;
  input?: any; // added for compatibility with react-final-form
} & React.InputHTMLAttributes<HTMLInputElement>;

const StyledTextField = styled(({ input, ...props }) => (
  <TextFieldMui {...props} />
))<Props>`
  && {
    width: 400px;
    color: ${({ theme }) => theme.colors.primary};
    .MuiFilledInput-input {
      cursor: ${({ readOnly }) => (readOnly === true ? 'not-allowed' : 'auto')};
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
  ...rest
}: Props) {
  const customProps = {
    error: meta && !!meta.error,
    label: (meta && meta.error) || label,
    variant: 'filled',
    InputProps: {
      readOnly
    },
    disabled: readOnly,
    readOnly: readOnly
  };

  const getCheckboxForReactFinalForm = () => {
    const { name, value, ...inputRest } = input;
    return (
      <StyledTextField
        {...rest}
        {...customProps}
        name={name}
        checked={!!value}
        {...inputRest}
      />
    );
  };

  return input ? (
    getCheckboxForReactFinalForm()
  ) : (
    <StyledTextField
      {...rest}
      {...customProps}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
