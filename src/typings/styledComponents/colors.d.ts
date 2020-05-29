import 'styled-components';

declare module 'styled-components' {
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
}
