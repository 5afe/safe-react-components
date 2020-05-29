import 'styled-components';

declare module 'styled-components' {
  export interface TextSize {
    sm: SmClass;
    md: SmClass;
    lg: SmClass;
    xl: SmClass;
    xs?: SmClass;
  }
}
