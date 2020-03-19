import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

import { Theme } from '../../theme';
import Icon, { IconType } from '../../dataDisplay/Icon';

type Props = {
  children: any;
  iconType?: keyof IconType;
  size: keyof Theme['buttons']['size'];
  color: 'primary' | 'secondary' | 'error';
  variant?: 'outlined' | 'contained';
};

const StyledButton = styled(ButtonMUI)<any>`
  && {
    height: ${({ buttonsize, theme }) => theme.buttons.size[buttonsize].height};
    color: ${({ variant, buttoncolor, theme }) =>
      variant === 'contained' ? theme.colors.white : theme.colors[buttoncolor]};
    background-color: ${({ variant, buttoncolor, theme }) =>
      variant === 'contained' ? theme.colors[buttoncolor] : theme.colors.white};
    border-color: ${({ buttoncolor, theme }) => theme.colors[buttoncolor]};

    :hover {
      border-color: ${({ buttoncolor, theme }) => theme.colors[buttoncolor]};
      background-color: ${({ variant, buttoncolor, theme }) => {
        return variant === 'contained'
          ? theme.colors[`${buttoncolor}Hover`]
          : theme.colors.white;
      }}
  }
`;

const Button = ({
  children,
  iconType,
  size: buttonSize,
  color: buttonColor,
  ...rest
}: Props) => (
  <StyledButton buttonsize={buttonSize} buttoncolor={buttonColor} {...rest}>
    {iconType && <Icon size="md" type={iconType} />}
    {children}
  </StyledButton>
);

export default Button;
