import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import theme, { ThemeButtonSize } from '../../theme';
import Icon, { IconType } from '../../dataDisplay/Icon';

export interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  iconType?: keyof IconType;
  size: ThemeButtonSize;
  color: 'primary' | 'secondary' | 'error';
  variant?: 'outlined' | 'contained';
}

type HoverColor = 'primaryHover' | 'secondaryHover' | 'errorHover';

const Button = ({
  children,
  iconType,
  size,
  color,
  variant,
  ...rest
}: Props): React.ReactElement => {
  const BootstrapButton = withStyles({
    root: {
      height: theme.buttons.size[size].height,
      padding: theme.buttons.size[size].padding,
      fontFamily: theme.fonts.fontFamily,
      color: variant === 'contained' ? theme.colors.white : theme.colors[color],
      'text-transform': 'capitalize',
      'background-color':
        variant === 'contained' ? theme.colors[color] : theme.colors.white,
      'border-color': theme.colors[color],

      '&:hover': {
        'border-color': theme.colors[color],
        'background-color':
          variant === 'contained'
            ? theme.colors[`${color}Hover` as HoverColor]
            : theme.colors.white,
      },

      '&:disabled': {
        opacity: theme.colors.disabled.opacity,
        color:
          variant === 'contained' ? theme.colors.white : theme.colors[color],
      },
    },
  })(ButtonMUI);

  return (
    <BootstrapButton {...rest}>
      {iconType && (
        <Icon
          size="md"
          color={variant === 'contained' ? 'white' : color}
          type={iconType}
        />
      )}
      {children}
    </BootstrapButton>
  );
};

export default Button;
