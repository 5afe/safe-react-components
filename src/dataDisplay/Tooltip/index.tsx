import React, { ReactElement } from 'react';
import MUITooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { rgba } from 'polished';

import theme, { ThemeColors } from '../../theme';

type TooltipColors = {
  backgroundColor?: ThemeColors;
  borderColor?: ThemeColors;
  textColor?: ThemeColors;
};

const customTooltip = ({
  backgroundColor,
  borderColor,
  textColor,
}: TooltipColors) =>
  withStyles(() => ({
    popper: {
      zIndex: 2001,
    },
    tooltip: {
      backgroundColor: backgroundColor
        ? (theme.colors[backgroundColor] as string)
        : theme.colors.overlay.color,
      border: `1px solid ${
        borderColor ? (theme.colors[borderColor] as string) : theme.colors.icon
      }`,
      boxShadow: `1px 2px 4px ${rgba(theme.colors.shadow.color, 0.08)}`,
      color: textColor
        ? (theme.colors[textColor] as string)
        : theme.colors.text,
    },
  }))(MUITooltip);

type Props = {
  title: string;
  children: ReactElement;
} & TooltipColors;

export const Tooltip = ({
  title,
  backgroundColor,
  borderColor,
  textColor,
  children,
  ...rest
}: Props & TooltipProps): ReactElement => {
  const StyledTooltip = customTooltip({
    backgroundColor,
    borderColor,
    textColor,
  });

  return (
    <StyledTooltip title={title} {...rest}>
      {children}
    </StyledTooltip>
  );
};
