import React from 'react';
import styled from 'styled-components';
import { Colors, TextSize } from '../../theme';

type Props = {
  children: any;
  size: keyof TextSize;
  color?: keyof Colors;
  strong?: boolean;
  center?: boolean;
};

const StyledText = styled.p<Props>`
  font-family: 'Averta';
  color: ${({ color, theme }) =>
    color ? (theme.colors[color] as string) : theme.colors.text};
  margin: 0;
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  font-size: ${({ size, theme }) => theme.text.size[size]?.fontSize};
  line-height: ${({ size, theme }) => theme.text.size[size]?.lineHeight};
  text-align: ${({ center }) => (center ? 'center' : 'start')};
`;

const Text = ({ children, ...rest }: Props) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Text;
