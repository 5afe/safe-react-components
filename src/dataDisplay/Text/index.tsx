import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { rgba } from 'polished';

import theme, { ThemeTextSize, ThemeColors } from '../../theme';

type Props = {
  children: React.ReactNode;
  size: ThemeTextSize;
  color?: ThemeColors;
  strong?: boolean;
  center?: boolean;
  tooltip?: string;
  className?: string;
};

const StyledText = styled.p<Props>`
  font-family: 'Averta';
  display: ${({ tooltip }) =>
    tooltip === undefined ? 'inline-block' : 'block'};
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.text};
  margin: 0;
  font-weight: ${({ strong }) => (strong ? 'bold' : 'normal')};
  font-size: ${({ size, theme }) => theme.text.size[size].fontSize};
  line-height: ${({ size, theme }) => theme.text.size[size].lineHeight};
  text-align: ${({ center }) => (center ? 'center' : 'start')};
`;

const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: theme.colors.white,
    color: theme.colors.text,
    boxShadow: `0px 0px 10px ${rgba(theme.colors.shadow.color, 0.2)}`,
  },
  arrow: {
    color: theme.colors.white,
    boxShadow: `0px 0px 10px ${rgba(theme.colors.shadow.color, 0.2)}`,
  },
}))(Tooltip);

const Text = ({ children, tooltip, ...rest }: Props): React.ReactElement => {
  const TextElement = <StyledText {...rest}>{children}</StyledText>;

  return tooltip === undefined ? (
    TextElement
  ) : (
    <StyledTooltip title={tooltip} placement="bottom" arrow>
      {TextElement}
    </StyledTooltip>
  );
};

export default Text;
