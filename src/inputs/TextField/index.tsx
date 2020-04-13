import React from 'react';
import TextFieldMui from '@material-ui/core/TextField';
import styled from 'styled-components';

type Props = {
  label: string;
  readOnly?: boolean;
  meta?: any;
} & React.InputHTMLAttributes<HTMLInputElement>;

const StyledTextField = styled(({ ...props }) => <TextFieldMui {...props} />)<
  Props
>`
  &&& {
    width: 400px;
    color: ${({ theme }) => theme.colors.primary};
    .MuiFilledInput-input {
      cursor: ${({ readOnly }) => (readOnly === true ? 'not-allowed' : 'auto')};
    }
  }
`;

function TextField({ meta, disabled, readOnly, label, ...rest }: Props) {
  return (
    <StyledTextField
      error={meta && meta.error}
      label={(meta && meta.error) || label}
      variant="filled"
      InputProps={{
        readOnly
      }}
      readOnly={readOnly}
      {...rest}
    />
  );
}

export default TextField;
