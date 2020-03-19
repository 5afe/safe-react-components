import React from 'react';
import styled from 'styled-components';

import { Theme } from '../../theme';

type Props = {
  children: any;
  size: keyof Theme['title']['size'];
};

const StyledH1 = styled.h1`  
  font-size: ${({ theme }) => theme.title.size.xl.fontSize};
  line-height: ${({ theme }) => theme.title.size.xl.lineHeight};
`;

const StyledH2 = styled.h2`  
  font-size: ${({ theme }) => theme.title.size.lg.fontSize};
  line-height: ${({ theme }) => theme.title.size.lg.lineHeight};
`;

const StyledH3 = styled.h3`  
  font-size: ${({ theme }) => theme.title.size.md.fontSize};
  line-height: ${({ theme }) => theme.title.size.md.lineHeight};
`;

const StyledH4 = styled.h4`  
  font-size: ${({ theme }) => theme.title.size.sm.fontSize};
  line-height: ${({ theme }) => theme.title.size.sm.lineHeight};
`;

const StyledH5 = styled.h5`  
  font-size: ${({ theme }) => theme.title.size.xs.fontSize};
  line-height: ${({ theme }) => theme.title.size.xs.lineHeight};
`;

const Text = ({ children, size }: Props) => {
  switch (size) {
    case 'xl': {
    return <StyledH1>{children}</StyledH1>;
    }
    case 'lg': {
      return <StyledH2>{children}</StyledH2>;
    }
    case 'md': {
      return <StyledH3>{children}</StyledH3>;
    }
    case 'sm': {
      return <StyledH4>{children}</StyledH4>;
    }
    case 'xs': {
      return <StyledH5>{children}</StyledH5>;
    }
  }  
};

export default Text;
