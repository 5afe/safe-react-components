import React, { ReactElement, ReactNode } from 'react';
import ButtonMUI, {
  ButtonProps as ButtonMUIProps,
} from '@material-ui/core/Button';
import styled from 'styled-components';

import theme, { Theme, ThemeButtonSize, ThemeIconSize } from '../../theme';
import { Icon, IconType, Props as IconProps } from '../../dataDisplay';

const StyledIcon = styled(Icon)<IconProps>`
  margin-right: 5px;
`;

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type StyledButtonProps = Overwrite<
  ButtonMUIProps,
  {
    color?: 'primary' | 'secondary' | 'error';
    variant?: 'bordered' | 'contained' | 'outlined';
    size: ThemeButtonSize;
    iconType?: keyof IconType;
    iconSize?: ThemeIconSize;
    component?: ReactNode;
    // for compatibility with react-router-dom Link
    to?: string;
  }
>;

const getSize = ({
  theme,
  size,
}: {
  theme: Theme;
  size: StyledButtonProps['size'];
}): Theme['buttons']['size']['lg' | 'md'] => theme.buttons.size[size];

const getColors = ({ theme }: { theme: Theme }): Theme['colors'] =>
  theme.colors;

const StyledButton = styled(ButtonMUI)<StyledButtonProps>`
  height: ${({
    theme,
    size,
  }: {
    theme: Theme;
    size: StyledButtonProps['size'];
  }) => theme.buttons.size[size].height};
  &.MuiButton-root {
    min-width: ${(props) => getSize(props).minWidth};
    padding: ${(props) => getSize(props).padding};
    font-family: ${theme.fonts.fontFamily};
    text-transform: none;
    border-radius: 8px;
  }

  &:hover {
    color: ${(props) => getColors(props).white} !important;
  }

  // these are set as the default values
  &.primary {
    color: ${(props) => getColors(props).white};
    background-color: ${(props) => getColors(props).primary};

    &.contained {
      &:hover {
        background-color: ${(props) => getColors(props).secondary};
      }
    }

    &.outlined,
    &.bordered {
      color: ${(props) => getColors(props).primary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).primaryHover};
      }
    }

    &.bordered {
      border: 2px solid ${(props) => getColors(props).primary};
    }
  }

  &.secondary {
    &.contained {
      color: ${(props) => getColors(props).white};
      background-color: ${(props) => getColors(props).secondary};

      &:hover {
        background-color: ${(props) => getColors(props).secondaryHover};
      }
    }

    &.outlined,
    &.bordered {
      color: ${(props) => getColors(props).secondary};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).secondaryHover};
      }
    }

    &.bordered {
      border: 2px solid ${(props) => getColors(props).secondary};
    }
  }

  &.error {
    &.contained {
      color: ${(props) => getColors(props).white};
      background-color: ${(props) => getColors(props).error};

      &:hover {
        background-color: ${(props) => getColors(props).errorHover};
      }
    }

    &.outlined,
    &.bordered {
      color: ${(props) => getColors(props).error};
      background-color: transparent;

      &:hover {
        background-color: ${(props) => getColors(props).errorHover};
      }
    }

    &.bordered {
      border: 2px solid ${(props) => getColors(props).error};
    }
  }

  &:disabled {
    opacity: ${(props) => getColors(props).disabled.opacity};
  }
`;

export const Button = ({
  children,
  iconType,
  iconSize = 'md',
  color = 'primary',
  variant = 'contained',
  ...props
}: StyledButtonProps): ReactElement => {
  return (
    <>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <StyledButton className={`${color} ${variant}`} {...props}>
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
