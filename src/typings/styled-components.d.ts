import 'styled-components';

import { Theme } from '../theme';

declare module 'styled-components' {
  export interface Buttons {
    size: ButtonsSize;
  }

  export interface ButtonsSize {
    md: PurpleLg;
    lg: PurpleLg;
  }

  export interface PurpleLg {
    height: string;
    padding: string;
  }

  export interface Colors {
    primary: string;
    primaryLight: string;
    primaryHover: string;
    secondary: string;
    secondaryLight: string;
    secondaryHover: string;
    error: string;
    errorHover: string;
    text: string;
    icon: string;
    placeHolder: string;
    inputField: string;
    separator: string;
    rinkeby: string;
    pendingTagHover: string;
    tag: string;
    background: string;
    white: string;
    disabled: Disabled;
    overlay: Overlay;
    shadow: Shadow;
  }

  export interface Disabled {
    opacity: number;
  }

  export interface Overlay {
    opacity: number;
    color: string;
  }

  export interface Shadow {
    blur: string;
    opacity: number;
    color: string;
  }

  export interface Fonts {
    fontFamily: string;
    fontFamilyCode: string;
  }

  export interface Icon {
    size: IconTextSize;
  }

  export interface IconTextSize {
    sm: null | string;
    md: null | string;
  }

  export interface Loader {
    size: LoaderSize;
  }

  export interface LoaderSize {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }

  export interface Text {
    size: TextSize;
  }

  export interface TextSize {
    sm: SmClass;
    md: SmClass;
    lg: SmClass;
    xl: SmClass;
    xs?: SmClass;
  }

  export interface SmClass {
    fontSize: string;
    lineHeight: string;
  }

  export interface DefaultTheme {
    fonts: Fonts;
    colors: Colors;
    buttons: Buttons;
    text: Text;
    iconText: Icon;
    title: Text;
    loader: Loader;
    icons: Icon;
  }
}
