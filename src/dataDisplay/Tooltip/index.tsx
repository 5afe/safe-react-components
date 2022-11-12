import React, { ReactElement } from 'react';
import MUITooltip, {
  TooltipProps as TooltipPropsMui,
} from '@material-ui/core/Tooltip';
import { withStyles, alpha } from '@material-ui/core/styles';

import theme, { ThemeColors, ThemeTooltipSize } from '../../theme';

type TooltipProps = {
  size?: ThemeTooltipSize;
  backgroundColor?: ThemeColors;
  textColor?: ThemeColors;
  padding?: string;
  border?: string;
};

const getPaddingBySize = (size: ThemeTooltipSize): string => {
  switch (size) {
    case 'lg':
      return '8px 16px';
    default:
      return '4px 8px';
  }
};

const getBorderBySize = (size: ThemeTooltipSize): string => {
  switch (size) {
    case 'lg':
      return 'none';
    default:
      return `1px solid ${theme.colors.icon}`;
  }
};

const getFontInfoBySize = (
  size: ThemeTooltipSize
): {
  fontSize: string;
  lineHeight: string;
} => {
  switch (size) {
    case 'lg':
      return theme.text.size.lg;
    default:
      return theme.text.size.md;
  }
};

const customTooltip = ({
  backgroundColor,
  textColor,
  size = 'md',
}: TooltipProps) =>
  withStyles(() => ({
    popper: {
      zIndex: 2001,
    },
    tooltip: {
      backgroundColor: backgroundColor
        ? (theme.colors[backgroundColor] as string)
        : theme.colors.overlay.color,
      boxShadow: `1px 2px 10px ${alpha(theme.colors.shadow.color, 0.18)}`,
      border: getBorderBySize(size),
      color: textColor
        ? (theme.colors[textColor] as string)
        : theme.colors.text,
      borderRadius: '4px',
      fontFamily: theme.fonts.fontFamily,
      padding: getPaddingBySize(size),
      fontSize: getFontInfoBySize(size).fontSize,
      lineHeight: getFontInfoBySize(size).lineHeight,
    },
    arrow: {
      color: backgroundColor
        ? (theme.colors[backgroundColor] as string)
        : theme.colors.overlay.color,
      border: 'none',

      '&::before': {
        boxShadow: `1px 2px 10px ${alpha(theme.colors.shadow.color, 0.18)}`,
      },
    },
  }))(MUITooltip);

type Props = {
  title: string;
  children: ReactElement;
} & TooltipProps;

export const Tooltip = ({
  title,
  backgroundColor,
  textColor,
  children,
  size,
  ...rest
}: Props & TooltipPropsMui): ReactElement => {
  const StyledTooltip = customTooltip({
    backgroundColor,
    textColor,
    size,
  });

  return (
    <StyledTooltip title={title} {...rest}>
      {children}
    </StyledTooltip>
  );
};
