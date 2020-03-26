import React from 'react';
import styled from 'styled-components';

import { Theme } from '../../theme';

type Props = {
  children: any;
  size: keyof Theme['title']['size'];
};

const StyledH1 = styled.h1`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.xl.fontSize};
  line-height: ${({ theme }) => theme.title.size.xl.lineHeight};
  font-weight: normal;
  margin: 30px 0;
`;

const StyledH2 = styled.h2`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.lg.fontSize};
  line-height: ${({ theme }) => theme.title.size.lg.lineHeight};
  font-weight: normal;
  margin: 28px 0;
`;

const StyledH3 = styled.h3`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.md.fontSize};
  line-height: ${({ theme }) => theme.title.size.md.lineHeight};
  font-weight: normal;
  margin: 26px 0;
`;

const StyledH4 = styled.h4`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.sm.fontSize};
  line-height: ${({ theme }) => theme.title.size.sm.lineHeight};
  font-weight: normal;
  margin: 22px 0;
`;

const StyledH5 = styled.h5`
  font-family: 'Averta';
  font-size: ${({ theme }) => theme.title.size.xs.fontSize};
  line-height: ${({ theme }) => theme.title.size.xs.lineHeight};
  font-weight: normal;
  margin: 18px 0;
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
