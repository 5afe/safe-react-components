import * as React from 'react';

import styled from 'styled-components';
import { Theme } from '../../theme';

type Props = {
  color: keyof Theme['colors'];
  size: keyof Theme['statusDot']['size'];
  className?: string;
};

const StyledDot = styled.div<Props>`
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  height: ${({ theme, size }) => theme.statusDot.size[size]};
  width: ${({ theme, size }) => theme.statusDot.size[size]};
`;

const StatusDot = (props: Props): React.ReactElement => (
  <StyledDot {...props} />
);

export default StatusDot;
