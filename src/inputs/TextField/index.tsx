import React from 'react';
import TextFieldMui from '@material-ui/core/TextField';
//import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

//import theme from '../../theme';

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  readOnly?: boolean;
  meta?: any;
  input?: any; // added for compatibility with react-final-form
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomTextField = styled(({ input, ...props }) => (
  <TextFieldMui {...props} />
))<Props>`
  && {
    width: 400px;

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
      <CustomTextField
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
    <CustomTextField
      {...rest}
      {...customProps}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
