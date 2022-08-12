const theme = {
  buttons: {
    size: {
      md: { height: '36px', minWidth: '130px', padding: '0 24px' },
      lg: { height: '52px', minWidth: '240px', padding: '0 48px' },
    },
  },
  colors: {
    primary: '#008C73',
    primaryLight: '#A1D2CA',
    primaryHover: '#005546',

    secondary: '#001428',
    secondaryLight: '#B2B5B2',
    secondaryHover: '#5D6D74',

    error: '#F02525',
    errorHover: '#C31717',
    errorTooltip: '#ffe6ea',

    text: '#001428',
    icon: '#B2B5B2',
    placeHolder: '#5D6D74',
    inputField: '#F0EFEE',

    separator: '#E8E7E6',
    rinkeby: '#E8673C',
    pendingTagHover: '#FBE5C5',
    tag: '#D4D5D3',
    background: '#F6F7F8',
    white: '#ffffff',
    warning: '#FFC05F',
    pending: '#E8663D',

    inputText: '#162D45',
    inputDisabled: '#DADADA',
    inputDefault: '#B2BBC0',
    inputFilled: '#566976',

    disabled: {
      opacity: 0.5,
    },
    overlay: {
      opacity: 0.75,
      color: '#E8E7E6',
    },
    shadow: {
      blur: '18px',
      opacity: 0.75,
      color: '#28363D',
    },
  },
  statusDot: {
    size: {
      sm: '5px',
      md: '10px',
    },
  },
  fonts: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
  },
  margin: {
    xxs: '4px',
    xs: '6px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
  },
  icons: {
    size: {
      sm: '16',
      md: '24',
    },
  },
  iconText: {
    size: {
      sm: null,
      md: null,
    },
  },
  identicon: {
    size: {
      xs: '10px',
      sm: '16px',
      md: '32px',
      lg: '40px',
      xl: '48px',
      xxl: '60px',
    },
  },
  loader: {
    size: {
      xxs: '10px',
      xs: '16px',
      sm: '30px',
      md: '50px',
      lg: '70px',
    },
  },
  text: {
    size: {
      sm: {
        fontSize: '11px',
        lineHeight: '14px',
      },
      md: {
        fontSize: '12px',
        lineHeight: '16px',
      },
      lg: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      xl: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
  title: {
    size: {
      xs: {
        fontSize: '20px',
        lineHeight: '26px',
      },
      sm: {
        fontSize: '24px',
        lineHeight: '30px',
      },
      md: {
        fontSize: '32px',
        lineHeight: '36px',
      },
      lg: {
        fontSize: '44px',
        lineHeight: '52px',
      },
      xl: {
        fontSize: '60px',
        lineHeight: '64px',
      },
    },
  },
  tooltip: {
    size: {
      md: '',
      lg: '',
    },
  },
};

export type Theme = typeof theme;

export type ThemeButtonSize = keyof Theme['buttons']['size'];
export type ThemeColors = keyof Theme['colors'];
export type ThemeIdenticonSize = keyof Theme['identicon']['size'];
export type ThemeIconSize = keyof Theme['icons']['size'];
export type ThemeMargin = keyof Theme['margin'];
export type ThemeLoaderSize = keyof Theme['loader']['size'];
export type ThemeStatusDotSize = keyof Theme['statusDot']['size'];
export type ThemeTextSize = keyof Theme['text']['size'];
export type ThemeTitleSize = keyof Theme['title']['size'];
export type ThemeTooltipSize = keyof Theme['tooltip']['size'];

export default theme;
