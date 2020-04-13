import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import styled from 'styled-components';
// import { rgba } from 'polished';

export interface Props {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  meta?: any;
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
  meta,
  ...rest
}: Props) => {
  const localOnChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => onChange(checked);

  return (
    <FormControlLabel
      control={
        <>
          <StyledCheckbox
            {...rest}
            checked={!!checked}
            onChange={localOnChange}
          />
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
