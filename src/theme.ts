interface Buttons {
  size: ButtonsSize;
}

export interface ButtonsSize {
  md: PurpleLg;
  lg: PurpleLg;
}

interface PurpleLg {
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

interface Disabled {
  opacity: number;
}

interface Overlay {
  opacity: number;
  color: string;
}

interface Shadow {
  blur: string;
  opacity: number;
  color: string;
}

interface Fonts {
  fontFamily: string;
  fontFamilyCode: string;
}

interface Icon {
  size: IconTextSize;
}

export interface IconTextSize {
  sm: null | string;
  md: null | string;
}

interface Loader {
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

interface SmClass {
  fontSize: string;
  lineHeight: string;
}

export interface Theme {
  fonts: Fonts;
  colors: Colors;
  buttons: Buttons;
  text: Text;
  iconText: Icon;
  title: Text;
  loader: Loader;
  icons: Icon;
}

const theme: Theme = {
  fonts: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
  },
  colors: {
    primary: '#008C73',
    primaryLight: '#A1D2CA',
    primaryHover: '#005546',

    secondary: '#001428',
    secondaryLight: '#B2B5B2',
    secondaryHover: '#5D6D74',

    error: '#DB3A3D',
    errorHover: '#C31717',

    text: '#001428',
    icon: '#B2B5B2',
    placeHolder: '#5D6D74',
    inputField: '#F0EFEE',

    separator: '#E8E7E6',
    rinkeby: '#E8673C',
    pendingTagHover: '#FBE5C5',
    tag: '#D4D5D3',
    background: '#F7F5F5',
    white: '#ffffff',

    disabled: {
      opacity: 0.5
    },
    overlay: {
      opacity: 0.75,
      color: '#E8E7E6'
    },
    shadow: {
      blur: '18px',
      opacity: 0.75,
      color: '#28363D'
    }
  },
  buttons: {
    size: {
      md: { height: '36px', padding: '0 16px' },
      lg: { height: '52px', padding: '0 25px' }
    }
  },
  text: {
    size: {
      sm: {
        fontSize: '11px',
        lineHeight: '14px'
      },
      md: {
        fontSize: '12px',
        lineHeight: '16px'
      },
      lg: {
        fontSize: '14px',
        lineHeight: '20px'
      },
      xl: {
        fontSize: '16px',
        lineHeight: '22px'
      }
    }
  },
  iconText: {
    size: {
      sm: null,
      md: null
    }
  },
  title: {
    size: {
      xs: {
        fontSize: '20px',
        lineHeight: '26px'
      },
      sm: {
        fontSize: '24px',
        lineHeight: '30px'
      },
      md: {
        fontSize: '32px',
        lineHeight: '36px'
      },
      lg: {
        fontSize: '44px',
        lineHeight: '52px'
      },
      xl: {
        fontSize: '60px',
        lineHeight: '64px'
      }
    }
  },
  loader: {
    size: {
      xs: '10px',
      sm: '30px',
      md: '50px',
      lg: '70px'
    }
  },
  icons: {
    size: {
      sm: '16',
      md: '24'
    }
  }
};

export default theme;
