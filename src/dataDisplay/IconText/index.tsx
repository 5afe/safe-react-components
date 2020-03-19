import React from 'react';
import styled from 'styled-components';

import { Theme } from '../../theme';
import Icon, { IconType } from '../Icon';
import Text from '../Text';

type Props = {
  iconType: keyof IconType;
  iconSize: keyof Theme['icons']['size'];
  textSize: keyof Theme['text']['size'];
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
function IconText({ iconSize, textSize, iconType, text }: Props) {
  return (
    <StyledIconText>
      <Icon size={iconSize} type={iconType} />
      <Text size={textSize}>{text}</Text>
    </StyledIconText>
  );
}

export default IconText;
