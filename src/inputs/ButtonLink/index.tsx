import React from 'react';
import styled from 'styled-components';

import { ThemeColors, ThemeTextSize, ThemeIconSize } from '../../theme';
import { Icon, IconType } from '../../dataDisplay/Icon';
import { Text } from '../../index';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  iconType?: keyof IconType;
  iconSize?: ThemeIconSize;
  textSize?: ThemeTextSize;
  color: ThemeColors;
  children: React.ReactNode;
}

const StyledButtonLink = styled.button<Props>`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme, color }) => theme['colors'][color]};
  font-family: ${({ theme }) => theme.fonts.fontFamily};
  display: flex;
  align-items: center;

  :focus {
    outline: none;
  }
`;

const StyledText = styled(Text)`
  margin: 0 4px;
`;

const ButtonLink = ({
  iconType,
  iconSize = 'md',
  children,
  textSize = 'lg',
  ...rest
}: Props): React.ReactElement => {
  return (
    <StyledButtonLink {...rest}>
      {iconType && <Icon size={iconSize} color={rest.color} type={iconType} />}
      <StyledText size={textSize} color={rest.color}>
        {children}
      </StyledText>
    </StyledButtonLink>
  );
};

export default ButtonLink;
