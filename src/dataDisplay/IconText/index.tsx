import React from 'react';
import styled from 'styled-components';

import { ThemeColors, ThemeIconSize, ThemeTextSize } from '../../theme';
import { Icon, IconType } from '../Icon';
import Text from '../Text';

type Props = {
  iconType: keyof IconType;
  iconSize: ThemeIconSize;
  textSize: ThemeTextSize;
  color?: ThemeColors;
  text: string;
  className?: string;
  iconSide?: 'left' | 'right';
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
const IconText = ({
  iconSize,
  textSize,
  iconType,
  text,
  iconSide = 'left',
  color,
  className,
}: Props): React.ReactElement => {
  return iconSide === 'right' ? (
    <StyledIconText className={className}>
      <Text size={textSize} color={color}>
        {text}
      </Text>
      <Icon size={iconSize} type={iconType} color={color} />
    </StyledIconText>
  ) : (
    <StyledIconText className={className}>
      <Icon size={iconSize} type={iconType} color={color} />
      <Text size={textSize} color={color}>
        {text}
      </Text>
    </StyledIconText>
  );
};

export default IconText;
