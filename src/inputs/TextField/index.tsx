import React from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import { InputBaseProps, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';

type CustomTextFieldInputProps = Pick<
  InputBaseProps,
  | 'inputProps'
  | 'startAdornment'
  | 'endAdornment'
  | 'error'
  | 'disabled'
  | 'readOnly'
>;
type CustomTextFieldProps = Omit<
  TextFieldProps,
  'InputProps' | 'variant' | 'onChange'
> & {
  readOnly?: boolean;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  InputProps?: CustomTextFieldInputProps;
  // Final Form 'FieldProps' types: https://final-form.org/docs/react-final-form/types/FieldProps
  meta?: {
    error?: string;
  };
};

type CustomTextFieldWithInputProps = CustomTextFieldProps & {
  input: InputBaseProps['inputProps'];
  onChange: never;
};
// If onChange prop is passed, do not allow it in the input attribute object
type CustomTextFieldWithOnChangeProps = CustomTextFieldProps & {
  onChange: TextFieldProps['onChange'];
  input?: Omit<InputBaseProps['inputProps'], 'onChange'>;
};

type ConditionalTextFieldProps =
  | CustomTextFieldWithInputProps
  | CustomTextFieldWithOnChangeProps;

const CustomTextField = styled((props: CustomTextFieldProps) => (
  <TextFieldMui {...props} />
))<CustomTextFieldProps>`
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
  input: inputProps,
  meta,
  label,
  InputProps,
  readOnly,
  startAdornment,
  endAdornment,
  ...rest
}: ConditionalTextFieldProps): React.ReactElement {
  const customInputProps: InputBaseProps = {
    ...InputProps,
    inputProps,
    startAdornment: startAdornment ? (
      <InputAdornment position="start">{startAdornment}</InputAdornment>
    ) : null,
    endAdornment: endAdornment ? (
      <InputAdornment position="end">{endAdornment}</InputAdornment>
    ) : null,
    readOnly,
    disabled: readOnly,
  };
  return (
    <CustomTextField
      {...rest}
      error={meta && !!meta.error}
      label={(meta && meta.error) || label}
      InputProps={customInputProps}
      size={undefined}
      color="primary"
      readOnly
    />
  );
}

export default TextField;
