import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';
import { Icon } from '../../dataDisplay/Icon';
import Text from '../../dataDisplay/Text';
import Link from '../../inputs/Link';

const Wrapper = styled.div`
  padding: 16px 0;
  box-sizing: border-box;
  max-height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 800;
  margin: 0 6px 0 6px;
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  text-transform: uppercase;
  font-weight: normal;
  margin: 0 6px 0 6px;
`;

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Breadcrumb = ({ className }: Props): React.ReactElement => (
  <Wrapper className={className}>
    <Icon type="addressBook" size="sm" color="primary" />
    <StyledLink size="md" color="primary">
      Address Book
    </StyledLink>
    <Text size="md" color="placeHolder">
      (3)
    </Text>
    <StyledText size="md" color="placeHolder">
     / Second Level
    </StyledText>
  </Wrapper>
);

export default Breadcrumb;
