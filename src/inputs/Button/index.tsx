import React, { ReactElement, ReactNode } from 'react';
import ButtonMUI, {
  ButtonProps as ButtonMUIProps,
} from '@material-ui/core/Button';
import styled, { css } from 'styled-components';

import theme, { Theme, ThemeButtonSize, ThemeIconSize } from '../../theme';
import { Icon, IconType, Props as IconProps } from '../../dataDisplay';

const StyledIcon = styled(Icon)<IconProps>`
  margin-right: 5px;
`;

type Colors = 'primary' | 'secondary' | 'error';
type Variations = 'bordered' | 'contained' | 'outlined';
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type StyledButtonProps = Overwrite<
  ButtonMUIProps,
  {
    color?: Colors;
    variant?: Variations;
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

const customStyles = {
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
    primary: css`
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

const StyledButton = styled(ButtonMUI)<StyledButtonProps>`
  height: ${({ theme, size }: any) => theme.buttons.size[size].height};
  &.MuiButton-root {
    min-width: ${(props) => getSize(props).minWidth};
    padding: ${(props) => getSize(props).padding};
    font-family: ${theme.fonts.fontFamily};
    text-transform: none;
    border-radius: 8px;
  }

  &:disabled {
    opacity: ${(props) => getColors(props).disabled.opacity};
  }

  ${(props) => customStyles['primary']['contained']}
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
