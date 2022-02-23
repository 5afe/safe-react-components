import React, { ReactElement } from 'react';
import TextFieldMui, { TextFieldProps } from '@material-ui/core/TextField';
import styled from 'styled-components';
import {
  errorStyles,
  inputLabelStyles,
  inputStyles,
  StyledTextFieldProps,
} from './styles';

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

const TextField = styled((props: StyledTextFieldProps) => (
  <TextFieldMui {...props} />
))<TextFieldProps>`
  && {
    ${inputLabelStyles}
    ${inputStyles}
    ${errorStyles}
  }
`;

export default TextFieldInput;
