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
};

const CustomTextField = styled((props: TextFieldProps & Props) => (
  <TextFieldMui {...props} />
)).attrs((props) => {
  if (props.input) {
    const { name, value, ...inputRest } = props.input;
    return {
      input: props.input,
      name,
      value,
      inputProps: inputRest,
      onChange: undefined,
    };
  } else {
    return {
      value: props.value,
      onChange: props.onChange,
    };
  }
})<Props>`
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
    color: 'primary',
  };

  return <CustomTextField {...rest} {...customProps} className={className} />;
}

export default TextField;
