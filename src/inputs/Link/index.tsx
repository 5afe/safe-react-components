import React from 'react';
import styled from 'styled-components';

import { ThemeColors, ThemeTextSize } from '../../theme';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: ThemeTextSize;
  color?: ThemeColors;
}

const StyledLink = styled.a<Props>`
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme, color = 'primary' }) => theme['colors'][color]};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  font-size: ${({ size = 'md', theme }) => theme.text.size[size].fontSize};
`;

const Link: React.FC<Props> = ({ children, ...rest }): React.ReactElement => {
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default Link;
