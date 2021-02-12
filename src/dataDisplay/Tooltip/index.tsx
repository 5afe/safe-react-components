import React, { ReactElement } from 'react';
import MUITooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { padding, rgba } from 'polished';

import theme, { ThemeColors } from '../../theme';

type TooltipColors = {
  backgroundColor?: ThemeColors;
  textColor?: ThemeColors;
  padding?: string;
  /* textSize?: string; */
};

const customTooltip = ({ backgroundColor, textColor, padding }: TooltipColors) =>
  withStyles(() => ({
    popper: {
      zIndex: 2001,
    },
    tooltip: {
      backgroundColor: backgroundColor
        ? (theme.colors[backgroundColor] as string)
        : theme.colors.overlay.color,
      boxShadow: `1px 2px 4px ${rgba(theme.colors.shadow.color, 0.08)}`,
      border: 'none',
      color: textColor
        ? (theme.colors[textColor] as string)
        : theme.colors.text,
      padding: ${({ padding }) => (padding ? '8px' : '16px')},

      /* fontSize: theme.text.size.lg.fontSize,
      lineHeight: theme.text.size.lg.lineHeight,
      padding: '12px',
      borderRadius: '8px', */
    },
    arrow: {
      color: backgroundColor
        ? (theme.colors[backgroundColor] as string)
        : theme.colors.overlay.color,
      border: 'none',
      '&::before': {
        boxShadow: `1px 2px 4px ${rgba(theme.colors.shadow.color, 0.08)}`,
      },
    },
  }))(MUITooltip);

type Props = {
  title: string;
  children: ReactElement;
} & TooltipColors;

export const Tooltip = ({
  title,
  backgroundColor,
  textColor,
  padding,
  children,
  ...rest
}: Props & TooltipProps): ReactElement => {
  const StyledTooltip = customTooltip({
    backgroundColor,
    textColor,
    padding,
  });

  return (
    <StyledTooltip title={title} {...rest}>
      {children}
    </StyledTooltip>
  );
};
