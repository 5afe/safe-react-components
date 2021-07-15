import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

export interface Props {
  label: React.ReactNode;
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
})((props: any) => <CheckboxMUI color="default" {...props} />);

const StyledFormHelperText = styled(FormHelperText)`
  && {
    color: ${({ theme }) => theme.colors.error};
    margin-top: 0px;
    padding-left: 0px;
    position: relative;
  }
`;

const Checkbox = ({
  checked,
  label,
  onChange,
  meta,
  input,
  ...rest
}: Props): React.ReactElement => {
  const getCheckboxForReactFinalForm = () => {
    const { name, value, ...inputRest } = input;
    return (
      <CustomCheckbox {...rest} name={name} checked={!!value} {...inputRest} />
    );
  };

  return (
    <FormControl component="fieldset">
      <FormControlLabel
        control={
          <>
            {input ? (
              getCheckboxForReactFinalForm()
            ) : (
              <CustomCheckbox {...rest} checked={checked} onChange={onChange} />
            )}
          </>
        }
        label={label}
      />
      {meta?.error && <StyledFormHelperText>{meta.error}</StyledFormHelperText>}
    </FormControl>
  );
};

export default Checkbox;
