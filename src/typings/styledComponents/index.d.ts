import 'styled-components';

declare module 'styled-components' {
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
