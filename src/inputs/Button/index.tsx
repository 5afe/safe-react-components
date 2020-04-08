import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

import { Theme } from '../../theme';
import Icon, { IconType } from '../../dataDisplay/Icon';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: any;
  iconType?: keyof IconType;
  size: keyof Theme['buttons']['size'];
  color: 'primary' | 'secondary' | 'error';
  variant?: 'outlined' | 'contained';
}

const StyledButton = styled(({ children, size, ...rest }) => (
  <ButtonMUI {...rest}>{children}</ButtonMUI>
))<Props>`
  && {
    height: ${({ size, theme }) => theme.buttons.size[size].height};
    color: ${({ variant, color, theme }) =>
      variant === 'contained' ? theme.colors.white : theme.colors[color]};
    background-color: ${({ variant, color, theme }) =>
      variant === 'contained' ? theme.colors[color] : theme.colors.white};
    border-color: ${({ color, theme }) => theme.colors[color]};

    :hover {
      border-color: ${({ color, theme }) => theme.colors[color]};
      background-color: ${({ variant, color, theme }) => {
        return variant === 'contained'
          ? theme.colors[`${color}Hover`]
          : theme.colors.white;
      }}
  }
`;

const Button = ({ children, iconType, size, color, ...rest }: Props) => (
  <StyledButton size={size} color={color} {...rest}>
    {iconType && <Icon size="md" color="white" type={iconType} />}
    {children}
  </StyledButton>
);

export default Button;
