import React from 'react';
import TextFieldMui, {
  StandardTextFieldProps,
  TextFieldProps,
} from '@material-ui/core/TextField';
import { InputBaseProps, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';

type Props = Omit<TextFieldProps, 'InputProps' | 'variant' | 'error'> & {
  readOnly?: boolean;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  input?: Omit<StandardTextFieldProps['inputProps'], 'onChange'>;
  // Final Form 'FieldProps' types: https://final-form.org/docs/react-final-form/types/FieldProps
  meta?: {
    error?: string;
  };
};

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
      color: ${({ theme, meta }) =>
        meta?.error ? theme.colors.error : theme.colors.primary};
    }

    .MuiFilledInput-underline:after {
      border-bottom: 2px solid
        ${({ theme, meta }) =>
          meta?.error ? theme.colors.error : theme.colors.primary};
    }
  }
`;

function TextField({
  input: inputProps,
  meta,
  label,
  readOnly,
  startAdornment,
  endAdornment,
  ...rest
}: Props): React.ReactElement {
  const customInputBaseProps: InputBaseProps = {
    startAdornment: startAdornment ? (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ) : null,
    endAdornment: endAdornment ? (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    ) : null,
    readOnly,
  };
  return (
    <CustomTextField
      {...rest}
      error={!!meta?.error}
      label={meta?.error || label}
      InputProps={customInputBaseProps}
      inputProps={inputProps}
      color="primary"
    />
  );
}

export default TextField;
