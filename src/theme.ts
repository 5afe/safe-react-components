const theme = {
  fonts: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    fontFamilyCode: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`
  },
  colors: {
    // semantic colors
    primary: '#008C73',
    primarySoft: '#A1D2CA',
    secondary: '#001428',
    secondarySoft: '#5D6D74',
    error: '#DB3A3D',
    disabled: '#B2B5B2',

    // named colors
    white: '#F7F5F5',
    whiteSmokeSoft: '#F0EFEE',
    whiteSmoke: '#E8E7E6',
    mediumGrey: '#B2B5B2',
    lightGrey: '#D4D5D3'
  },
  buttons: {
    size: {
      xs: '50px',
      sm: '70px',
      md: '90px',
      lg: '90px'
    }
  },
  text: {
    size: {
      xs: {
        fontSize: '11px',
        lineHeight: '14px'
      },
      sm: {
        fontSize: '12px',
        lineHeight: '16px'
      },
      md: {
        fontSize: '14px',
        lineHeight: '20px'
      },
      lg: {
        fontSize: '16px',
        lineHeight: '22px'
      },
      xl: {
        fontSize: '20px',
        lineHeight: '26px'
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
      sm: '16px',
      md: '24px'
    }
  }
};

export type Theme = typeof theme;

export default theme;
