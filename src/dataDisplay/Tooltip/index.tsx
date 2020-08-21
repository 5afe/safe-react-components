import React from 'react';
import MaterialUiTooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';

import theme from '../../theme';

export type Props = Omit<TooltipProps, 'arrow'>;

const StyledToolTip = withStyles(() => ({
  tooltip: {
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    fontSize: theme.text.size.lg.fontSize,
    lineHeight: theme.text.size.lg.lineHeight,
    fontFamily: theme.fonts.fontFamily,
    letterSpacing: 0,
    textAlign: 'center',
    maxWidth: '200px',
    padding: '12px',
    borderRadius: '8px',
    boxShadow: '1px 2px 10px 0 rgba(40, 54, 61, 0.18)',
  },
  arrow: {
    color: theme.colors.white,
    width: '2em',
  },
  tooltipPlacementLeft: {
    margin: '0 14px',
  },
  tooltipPlacementRight: {
    margin: '0 14px',
  },
  tooltipPlacementTop: {
    margin: '14px 0',
  },
  tooltipPlacementBottom: {
    margin: '14px 0',
  },
}))(MaterialUiTooltip);

export const Tooltip: React.FC<Props> = (props) => (
  <StyledToolTip {...props} arrow />
);
