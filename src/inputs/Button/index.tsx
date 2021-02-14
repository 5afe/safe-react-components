import React, { ReactElement, ReactNode, HTMLAttributes } from 'react';
import ButtonMUI, {
  ButtonProps as ButtonMUIProps,
} from '@material-ui/core/Button';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import theme, { Theme, ThemeButtonSize, ThemeIconSize } from '../../theme';
import { Icon, IconType, Props as IconProps } from '../../dataDisplay';

type Colors = 'primary' | 'secondary' | 'error';
type Variations = 'bordered' | 'contained' | 'outlined';

type CustomButtonMuiProps = Omit<ButtonMUIProps, 'size' | 'color' | 'variant'>;
type LocalProps = {
  children?: ReactNode;
  color?: Colors;
  disabled?: boolean;
  variant?: Variations;
  size: ThemeButtonSize;
  iconType?: keyof IconType;
  iconSize?: ThemeIconSize;
  // for compatibility with react-router-dom Link
  to?: string;
};

type Props = {
  buttonMuiProps?: CustomButtonMuiProps;
} & LocalProps &
  HTMLAttributes<HTMLButtonElement>;

const StyledIcon = styled(Icon)<IconProps>`
  margin-right: 5px;
`;

const getSize = (theme: Theme, size: ThemeButtonSize) =>
  theme.buttons.size[size];

const getColors = ({ theme }: { theme: Theme }): Theme['colors'] =>
  theme.colors;

const customStyles: {
  [key in Colors]: {
    [key in Variations]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  };
} = {
  primary: {
    contained: css`
      color: ${(props) => getColors(props).white};
      background-color: ${(props) => getColors(props).primary};

      &:hover {
        background-color: ${(props) => getColors(props).secondary};
      }
    `,
    outlined: css`
      color: ${(props) => getColors(props).primary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).primaryHover};
      }
    `,
    bordered: css`
      color: ${(props) => getColors(props).primary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).primaryHover};
      }
      border: 2px solid ${(props) => getColors(props).primary};
    `,
  },
  secondary: {
    contained: css`
      color: ${(props) => getColors(props).white};
      background-color: ${(props) => getColors(props).secondary};

      &:hover {
        background-color: ${(props) => getColors(props).secondaryHover};
      }
    `,
    outlined: css`
      color: ${(props) => getColors(props).secondary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).secondaryHover};
      }
    `,
    bordered: css`
      color: ${(props) => getColors(props).secondary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).secondaryHover};
      }

      border: 2px solid ${(props) => getColors(props).secondary};
    `,
  },
  error: {
    contained: css`
      color: ${(props) => getColors(props).white};
      background-color: ${(props) => getColors(props).error};

      &:hover {
        background-color: ${(props) => getColors(props).errorHover};
      }
    `,
    outlined: css`
      color: ${(props) => getColors(props).error};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).errorHover};
      }
    `,
    bordered: css`
      color: ${(props) => getColors(props).error};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).errorHover};
      }

      border: 2px solid ${(props) => getColors(props).error};
    `,
  },
};

const StyledButton = styled(ButtonMUI)<{ localProps: LocalProps }>`
  && {
    height: ${({ theme, localProps }) =>
      theme.buttons.size[localProps.size].height};
    &.MuiButton-root {
      min-width: ${({ theme, localProps }) =>
        getSize(theme, localProps.size).minWidth};
      padding: ${({ theme, localProps }) =>
        getSize(theme, localProps.size).padding};
      font-family: ${theme.fonts.fontFamily};
      text-transform: none;
      border-radius: 8px;
    }

    &:disabled {
      opacity: ${(props) => getColors(props).disabled.opacity};
    }

    ${({ localProps }) => {
      if (localProps.color !== undefined && localProps.variant !== undefined) {
        return customStyles[localProps.color][localProps.variant];
      }
    }}
  }
`;

export const Button = ({
  children,
  color = 'primary',
  variant = 'contained',
  iconType,
  iconSize = 'md',
  buttonMuiProps,
  ...rest
}: Props): ReactElement => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledButton
        className={`${color} ${variant}`}
        {...buttonMuiProps}
        localProps={{ color, variant, ...rest }}>
        {iconType && (
          <StyledIcon
            size={iconSize}
            color={variant === 'contained' ? 'white' : color}
            type={iconType}
          />
        )}
        {children}
      </StyledButton>
    </>
  );
};
