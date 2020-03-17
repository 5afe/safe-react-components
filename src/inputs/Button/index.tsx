import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import styled from 'styled-components';

import { Theme } from '../../theme';

const StyledButton = styled(ButtonMUI)<any>`
  && {
    background-color: ${({ color, theme }) => theme.colors[color]};
    width: ${({ size, theme }) => theme.buttons.size[size]};
    box-shadow: 1px 2px 10px #d4d4d396;
    border-radius: 4px;
    color: white;
    font-family: 'Averta';
    text-transform: none;

    :hover {
      background-color: #001428;
    }
  }
`;

type Props = {
  children: any;
  size: keyof Theme['buttons']['size'];
  color: keyof Theme['colors'];
};

const Button = ({ children, ...rest }: Props) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
