import React from 'react';
import styled from 'styled-components';

import { Theme } from '../../theme';
import Icon, { IconType } from '../Icon';
import Text from '../Text';

type Props = {
  iconType: keyof IconType;
  iconSize: keyof Theme['icons']['size'];
  textSize: keyof Theme['text']['size'];
  color?: keyof Theme['colors'];
  text: string;
  className?: string;
};

const StyledIconText = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 6px;
  }
`;

/**
 * The `IconText` renders an icon next to a text
 */
function IconText({
  iconSize,
  textSize,
  iconType,
  text,
  color,
  className
}: Props) {
  return (
    <StyledIconText className={className}>
      <Icon size={iconSize} type={iconType} color={color} />
      <Text size={textSize} color={color}>
        {text}
      </Text>
    </StyledIconText>
  );
}

export default IconText;
