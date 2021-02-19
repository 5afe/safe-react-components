import React from 'react';
import styled from 'styled-components';
import { ThemeColors } from '../../theme';

type Props = {
  className?: string;
  color: ThemeColors;
};

const StyledDot = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

const Dot: React.FC<Props> = ({ children, ...rest }): React.ReactElement => (
  <StyledDot {...rest}>{children}</StyledDot>
);

export default Dot;
