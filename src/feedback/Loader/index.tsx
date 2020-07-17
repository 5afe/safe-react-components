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

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  .p {
    margin-right: 5px;
  }
`;

const StyledCircularProgress = styled(({ size, className }: Props) => (
  <CircularProgress size={theme.loader.size[size]} className={className} />
))`
  &.MuiCircularProgress-colorPrimary {
    color: ${({ theme, color = 'primary' }) => theme.colors[color]};
  }
`;

const Loader = ({ className, size, color }: Props) => {
  return (
    <Wrapper>
      <StyledCircularProgress size={size} color={color} className={className} />
    </Wrapper>
  );
};

export default Loader;
