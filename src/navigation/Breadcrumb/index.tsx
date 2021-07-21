import React from 'react';
import styled from 'styled-components';

import { Icon, IconTypes } from '../../dataDisplay/Icon';
import Text from '../../dataDisplay/Text';
import Link from '../../inputs/Link';
import { ThemeColors } from '../../theme';

const Wrapper = styled.div`
  padding: 16px 0;
  box-sizing: border-box;
  max-height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 5px;
`;

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 800;
  cursor: text;
  margin: auto 5px;
`;

const StyledText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  text-transform: uppercase;
  font-weight: normal;
  margin: auto 5px;
`;

type BreadcrumbTextProps = {
  text: string;
  color: ThemeColors;
};

const BreadcrumbText = ({ text, color }: BreadcrumbTextProps) =>
  color === 'primary' ? (
    <StyledLink size="md" color={color}>
      {text}
    </StyledLink>
  ) : (
    <StyledText size="md" color={color}>
      {text}
    </StyledText>
  );

type BreadcrumbElementProps = {
  iconType?: IconTypes;
  text: string;
  counter?: string;
  color?: ThemeColors;
};

export const BreadcrumbElement = ({
  iconType,
  text,
  counter,
  color = 'primary',
}: BreadcrumbElementProps): React.ReactElement => {
  return (
    <ElementWrapper>
      {iconType && <Icon type={iconType} size="sm" color={color} />}
      <BreadcrumbText {...{ text, color }} />
      {counter && (
        <Text size="md" color="placeHolder">
          ({counter})
        </Text>
      )}
    </ElementWrapper>
  );
};

type Props = {
  children: React.ReactNode;
  separator?: string;
  className?: string;
};

export const Breadcrumb = ({
  children,
  separator = '/',
  className,
}: Props): React.ReactElement => (
  <Wrapper className={className}>
    {React.Children.map(children, (child, index) => {
      return (
        <>
          {index > 0 && (
            <Text size="md" color="placeHolder">
              {separator}
            </Text>
          )}
          {child}
        </>
      );
    })}
  </Wrapper>
);
