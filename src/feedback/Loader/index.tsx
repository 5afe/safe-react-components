import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme, { ThemeLoaderSize, ThemeColors } from '../../theme';

type Props = {
  size: ThemeLoaderSize;
  color?: ThemeColors;
  className?: string;
};

const StyledCircularProgress = styled(
  ({ size, className }: Props): React.ReactElement => (
    <CircularProgress size={theme.loader.size[size]} className={className} />
  )
)`
  &.MuiCircularProgress-colorPrimary {
    color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  }
`;

const Loader = ({ className, size, color }: Props): React.ReactElement => (
  <StyledCircularProgress size={size} color={color} className={className} />
);

export default Loader;
