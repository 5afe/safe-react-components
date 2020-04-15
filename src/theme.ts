const theme = {
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
      opacity: '50%'
    },
    overlay: {
      opacity: '75',
      color: '#E8E7E6'
    },
    shadow: {
      opacity: '18',
      color: '#28363D'
    },
    cardShadow: {
      opacity: '59',
      color: '#D4D4D3'
    }
  },
  buttons: {
    size: {
      md: { height: '36px', padding: '0 16px'},
      lg: { height: '52px', padding: '0 25px'}
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

export type Theme = typeof theme;

export default theme;
