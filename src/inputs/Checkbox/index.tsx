import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import styled from 'styled-components';
// import { rgba } from 'polished';

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

const StyledCheckbox = styled(({ ...props }) => <CheckboxMUI {...props} />)<
  Props
>`
  && {
    .MuiCheckbox-colorSecondary.Mui-checked,
    svg.MuiSvgIcon-root {
      color: ${({ theme }) => theme.colors.primary}};
    }

    .MuiTouchRipple-root {
      background-color: transparent;
    }
  }
`;

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
      <StyledCheckbox {...rest} name={name} checked={!!value} {...inputRest} />
    );
  };

  return (
    <FormControlLabel
      control={
        <>
          {input ? (
            getCheckboxFromReactFinalForm()
          ) : (
            <StyledCheckbox {...rest} checked={checked} onChange={onChange} />
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
