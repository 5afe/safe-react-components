import React from 'react';
import styled from 'styled-components';

import { Colors, IconTextSize, TextSize } from '../../theme';

import Icon, { IconType } from '../Icon';
import Text from '../Text';

type Props = {
  iconType: keyof IconType;
  iconSize: keyof IconTextSize;
  textSize: keyof TextSize;
  color?: keyof Colors;
  text: string;
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
function IconText({ iconSize, textSize, iconType, text, color }: Props) {
  return (
    <StyledIconText>
      <Icon size={iconSize} type={iconType} color={color} />
      <Text size={textSize} color={color}>
        {text}
      </Text>
    </StyledIconText>
  );
}

export default IconText;
