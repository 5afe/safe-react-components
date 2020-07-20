import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Text } from '../../';

import theme, { Theme } from '../../theme';

type TextType = typeof Text;

type Props = {
  size: keyof Theme['loader']['size'];
  color?: keyof Theme['colors'];
  className?: string;
};

const StyledCircularProgress = styled(({ size, className }: Props) => (
  <CircularProgress size={theme.loader.size[size]} className={className} />
))`
  &.MuiCircularProgress-colorPrimary {
    color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  }
`;

const Loader = ({ className, size, color }: Props) => {
  return (
    <StyledCircularProgress size={size} color={color} className={className} />
  );
};

export default Loader;
