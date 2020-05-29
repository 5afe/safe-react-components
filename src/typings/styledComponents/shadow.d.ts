import 'styled-components';

declare module 'styled-components' {
  export interface Shadow {
    blur: string;
    opacity: number;
    color: string;
  }
}
