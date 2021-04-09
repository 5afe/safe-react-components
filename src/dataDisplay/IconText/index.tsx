import React from 'react';
import styled from 'styled-components';

import {
  ThemeColors,
  ThemeIconSize,
  ThemeMargin,
  ThemeTextSize,
} from '../../theme';
import { Icon, IconType } from '../Icon';
import Text from '../Text';

type Props = {
  iconType: keyof IconType;
  iconSize: ThemeIconSize;
  margin?: ThemeMargin;
  textSize: ThemeTextSize;
  color?: ThemeColors;
  text: string;
  className?: string;
  iconSide?: 'left' | 'right';
};

const StyledIconText = styled.div<{ margin: ThemeMargin }>`
  display: flex;
  align-items: center;
  svg {
    margin: 0 ${({ theme, margin }) => theme.margin[margin]};
  }
`;

/**
 * The `IconText` renders an icon next to a text
 */
const IconText = ({
  iconSize,
  margin = 'xs',
  textSize,
  iconType,
  text,
  iconSide = 'left',
  color,
  className,
}: Props): React.ReactElement => {
  return iconSide === 'right' ? (
    <StyledIconText className={className} margin={margin}>
      <Text size={textSize} color={color}>
        {text}
      </Text>
      <Icon size={iconSize} type={iconType} color={color} />
    </StyledIconText>
  ) : (
    <StyledIconText className={className} margin={margin}>
      <Icon size={iconSize} type={iconType} color={color} />
      <Text size={textSize} color={color}>
        {text}
      </Text>
    </StyledIconText>
  );
};

export default IconText;
