import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import theme, { ThemeButtonSize, ThemeIconSize } from '../../theme';
import { Icon, IconType } from '../../dataDisplay/Icon';

enum Variant {
  outlined = 'outlined',
  bordered = 'bordered',
  contained = 'contained',
}
export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  size: ThemeButtonSize;
  color: 'primary' | 'secondary' | 'error';
  variant?: keyof typeof Variant;
  iconType?: keyof IconType;
  iconSize?: ThemeIconSize;
}

type HoverColor = 'secondary' | 'secondaryHover' | 'errorHover';

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

const Button = ({
  children,
  iconType,
  size,
  iconSize = 'md',
  color,
  variant,
  ...rest
}: Props): React.ReactElement => {
  const getColor = (isDisabled?: boolean) => {
    switch (variant) {
      case Variant.contained:
        return theme.colors.white;
      case Variant.outlined:
      case Variant.bordered:
        return isDisabled
          ? theme.colors[`${color}Hover` as HoverColor]
          : theme.colors[color];
    }
  };

  const getBackgroundColor = (isHover?: boolean) => {
    switch (variant) {
      case Variant.contained:
        return isHover ? theme.colors.secondary : theme.colors.primary;
      case Variant.outlined:
      case Variant.bordered:
        return isHover ? theme.colors.background : theme.colors.white;
    }
  };

  const getBorder = () => {
    switch (variant) {
      case Variant.contained:
      case Variant.outlined:
        return 'none';
      case Variant.bordered:
        return `2px solid ${theme.colors[color]}`;
    }
  };

  const BootstrapButton = withStyles({
    root: {
      height: theme.buttons.size[size].height,
      minWidth: theme.buttons.size[size].minWidth,
      padding: theme.buttons.size[size].padding,
      fontFamily: theme.fonts.fontFamily,
      color: getColor(),
      'text-transform': 'capitalize',
      'background-color': getBackgroundColor(),
      border: getBorder(),
      'border-radius': '8px',
      '&:hover': {
        'background-color': getBackgroundColor(true),
      },
      '&:disabled': {
        opacity: theme.colors.disabled.opacity,
        color: getColor(true),
      },
    },
  })(ButtonMUI);

  return (
    <BootstrapButton {...rest}>
      {iconType && (
        <StyledIcon
          size={iconSize}
          color={variant === Variant.contained ? 'white' : color}
          type={iconType}
        />
      )}
      {children}
    </BootstrapButton>
  );
};

export default Button;
