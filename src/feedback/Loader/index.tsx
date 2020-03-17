import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme, { Theme } from '../../theme';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

type Props = {
  size: keyof Theme['loader']['size'];
};

const Loader = ({ size }: Props) => (
  <Wrapper>
    <CircularProgress size={theme.loader.size[size]} />
  </Wrapper>
);

export default Loader;
