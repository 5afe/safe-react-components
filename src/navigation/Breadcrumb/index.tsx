import React from 'react';
import styled from 'styled-components';

import { Icon, IconTypes } from '../../dataDisplay/Icon';
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
  margin: 0 5px;
  cursor: text;
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  text-transform: uppercase;
  font-weight: normal;
  margin: 0 5px;
`;

type Props = {
  iconType: IconTypes;
  mainLevelText: string;
  subLevelsList?: string[];
  separator?: string;
  className?: string;
};

const Breadcrumb = ({
  iconType,
  mainLevelText,
  subLevelsList,
  separator = '/',
  className,
}: Props): React.ReactElement => (
  <Wrapper className={className}>
    <Icon type={iconType} size="sm" color="primary" />
    <StyledLink size="md" color="primary">
      {mainLevelText}
    </StyledLink>
    {subLevelsList &&
      subLevelsList.map((subLevelText) => (
        <>
          <Text size="md" color="placeHolder">
            {separator}
          </Text>
          <StyledText size="md" color="placeHolder">
            {subLevelText}
          </StyledText>
        </>
      ))}
  </Wrapper>
);

export default Breadcrumb;
