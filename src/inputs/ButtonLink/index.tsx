import React from 'react';
import styled from 'styled-components';

import { Theme } from '../../theme';
import Icon, { IconType } from '../../dataDisplay/Icon';
import { Text } from '../../index';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  iconType?: keyof IconType;
  color: keyof Theme['colors'];
  children: any;
}

const StyledButtonLink = styled.button<Props>`
  background: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme, color }) => theme['colors'][color]};
  font-family: inherit;
  display: flex;
  align-items: center;

  :focus {
    outline: none;
  }
`;

const ButtonLik = ({ iconType, children, ...rest }: Props) => {
  return (
    <StyledButtonLink {...rest}>
      {iconType && <Icon size="md" color={rest.color} type={iconType} />}
      <Text size="xl" color={rest.color}>
        {children}
      </Text>
    </StyledButtonLink>
  );
};

export default ButtonLik;
