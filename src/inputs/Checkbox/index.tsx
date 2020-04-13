import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';
// import { rgba } from 'polished';

import theme from '../../theme';


export interface Props {
  label: string;
  checked: boolean;
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  meta?: any;
  input?: any; // added for compatibility with react-final-form
}

const CustomCheckbox = withStyles({
  root: {
    color: theme.colors.primary,
    '&$checked': {
      color: theme.colors.primary,
    },
  },
  checked: {},
})((props: any) => <CheckboxMUI color="default" {...props} />);

const StyledFormHelperText = styled(FormHelperText)`
  && {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const Checkbox = ({
  checked,
  label,
  onChange,
  name,
  meta,
  input,
  ...rest
}: Props) => {
  const getCheckboxFromReactFinalForm = () => {
    const { name, value, ...inputRest } = input;
    return (
      <CustomCheckbox {...rest} name={name} checked={!!value} {...inputRest} />
    );
  };

  return (
    <FormControlLabel
      control={
        <>
          {input ? (
            getCheckboxFromReactFinalForm()
          ) : (
            <CustomCheckbox {...rest} checked={checked} onChange={onChange} />
          )}

          {meta?.error && (
            <StyledFormHelperText>{meta.error}</StyledFormHelperText>
          )}
        </>
      }
      label={label}
    />
  );
};

export default Checkbox;
