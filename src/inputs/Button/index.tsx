import React, { ReactElement, ReactNode, HTMLAttributes } from 'react';
import ButtonMUI, {
  ButtonProps as ButtonMUIProps,
} from '@material-ui/core/Button';
import { alpha } from '@material-ui/core/styles';

import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import theme, {
  ThemeButtonSize,
  ThemeIconSize,
  ThemeTextSize,
} from '../../theme';
import { Icon, IconType, Props as IconProps } from '../../dataDisplay';

type Colors = 'primary' | 'secondary' | 'error';
type Variations = 'bordered' | 'contained' | 'outlined';

type CustomButtonMuiProps = Omit<
  ButtonMUIProps,
  'size' | 'color' | 'variant'
> & {
  to?: string;
  component?: ReactNode;
};
type LocalProps = {
  children?: ReactNode;
  color?: Colors;
  variant?: Variations;
  size: ThemeButtonSize;
  textSize?: ThemeTextSize;
  iconType?: keyof IconType;
  iconSize?: ThemeIconSize;
};

type Props = LocalProps &
  CustomButtonMuiProps &
  HTMLAttributes<HTMLButtonElement>;

const StyledIcon = styled(Icon)<IconProps>`
  margin-right: 5px;
`;

const customStyles: {
  [key in Colors]: {
    [key in Variations]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  };
} = {
  primary: {
    contained: css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 1px 2px 10px ${alpha(theme.colors.shadow.color, 0.18)};

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }
    `,
    outlined: css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      path.icon-color {
        fill: ${({ theme }) => theme.colors.primary};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.primaryHover};
        }
        background-color: ${({ theme }) => theme.colors.background};
      }
    `,
    bordered: css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      path.icon-color {
        fill: ${({ theme }) => theme.colors.primary};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.white};
        }
        background-color: ${({ theme }) => theme.colors.primaryHover};
        border: 2px solid ${({ theme }) => theme.colors.primaryHover};
      }
    `,
  },
  secondary: {
    contained: css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.secondary};
      box-shadow: 1px 2px 10px ${alpha(theme.colors.shadow.color, 0.18)};

      path.icon-color {
        color: ${({ theme }) => theme.colors.white};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondaryHover};
        path.icon-color {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    `,
    outlined: css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: transparent;
      path.icon-color {
        fill: ${({ theme }) => theme.colors.secondary};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.secondaryHover};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.secondaryHover};
        }
        background-color: ${({ theme }) => theme.colors.background};
      }
    `,
    bordered: css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      path.icon-color {
        fill: ${({ theme }) => theme.colors.secondary};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.secondary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.white};
        }
        background-color: ${({ theme }) => theme.colors.secondaryHover};
        border: 2px solid ${({ theme }) => theme.colors.secondaryHover};
      }
    `,
  },
  error: {
    contained: css`
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.error};
      box-shadow: 1px 2px 10px ${alpha(theme.colors.shadow.color, 0.18)};

      &:hover {
        background-color: ${({ theme }) => theme.colors.errorHover};
      }
    `,
    outlined: css`
      color: ${({ theme }) => theme.colors.error};
      background-color: transparent;
      path.icon-color {
        fill: ${({ theme }) => theme.colors.error};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.error};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.errorHover};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.errorHover};
        }
        background-color: ${({ theme }) => theme.colors.background};
      }
    `,
    bordered: css`
      color: ${({ theme }) => theme.colors.error};
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.error};
      path.icon-color {
        fill: ${({ theme }) => theme.colors.error};
      }

      &.Mui-disabled {
        color: ${({ theme }) => theme.colors.error};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.white};
        path.icon-color {
          fill: ${({ theme }) => theme.colors.white};
        }
        background-color: ${({ theme }) => theme.colors.errorHover};
        border: 2px solid ${({ theme }) => theme.colors.errorHover};
      }
    `,
  },
};

const StyledButton = styled(ButtonMUI)<{ $localProps: LocalProps }>`
  && {
    height: ${({ theme, $localProps }) =>
      theme.buttons.size[$localProps.size].height};
    &.MuiButton-root {
      min-width: ${({ theme, $localProps: { size } }) =>
        theme.buttons.size[size].minWidth};
      padding: ${({ theme, $localProps: { size } }) =>
        theme.buttons.size[size].padding};
      font-family: ${theme.fonts.fontFamily};
      font-size: ${({ theme, $localProps }) =>
        theme.text.size[$localProps.textSize ?? 'xl'].fontSize};
      line-height: ${({ theme, $localProps }) =>
        theme.text.size[$localProps.textSize ?? 'xl'].lineHeight};
      text-transform: none;
      border-radius: 8px;
      letter-spacing: 0;
    }

    &.Mui-disabled {
      color: ${({ theme }) => theme.colors.white};
    }

    path.icon-color {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:disabled {
      opacity: ${({ theme }) => theme.colors.disabled.opacity};
    }

    ${({ $localProps }) => {
      if (
        $localProps.color !== undefined &&
        $localProps.variant !== undefined
      ) {
        return customStyles[$localProps.color][$localProps.variant];
      }
    }}
  }
`;

export const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  size,
  textSize = 'xl',
  iconType,
  iconSize = 'md',
  // We need destructuring all LocalProps, remaining props are for CustomButtonMuiProps
  ...buttonMuiProps
}: Props): ReactElement => {
  return (
    <StyledButton
      className={`${color} ${variant}`}
      {...buttonMuiProps}
      $localProps={{ color, variant, size, textSize }}>
      {iconType && <StyledIcon size={iconSize} type={iconType} />}
      {children}
    </StyledButton>
  );
};
