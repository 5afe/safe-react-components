import { Theme, PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import safeColors from './safeColors';

const secondaryLightPalette = {
  main: safeColors.secondary,
};

const secondaryDarkPalette = {
  main: safeColors.secondaryLight,
};

const safeThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: safeColors.primary,
    },

    secondary: secondaryLightPalette,
  },

  typography: {
    fontFamily: `'Averta', 'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    h1: {
      fontSize: 32,
      lineHeight: '36px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 27,
      lineHeight: '34px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 24,
      lineHeight: '30px',
    },
    h4: {
      fontSize: 20,
      lineHeight: '26px',
    },
    body1: {
      fontSize: 16,
      lineHeight: '22px',
    },
    body2: {
      fontSize: 14,
      lineHeight: '20px',
    },
    caption: {
      fontSize: 12,
      lineHeight: '16px',
    },
    overline: {
      fontSize: 11,
      lineHeight: '14px',
      textTransform: 'uppercase',
    },
  },

  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: safeColors.primary,
        },
        arrow: {
          color: safeColors.primary,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          borderColor: safeColors.primaryHover,
          textTransform: 'none',
        },
        outlined: {
          border: '2px solid',
          '&:hover': {
            border: '2px solid',
          },
        },
      },
    },
  },
};

const safeTheme: Theme = createTheme(safeThemeOptions);

export default safeTheme;

export const getSafeTheme = (mode: PaletteMode): Theme =>
  createTheme({
    ...safeThemeOptions,
    palette: {
      ...safeThemeOptions.palette,
      mode: mode,
      // see more details in the docs https://mui.com/material-ui/customization/dark-mode/
      secondary:
        mode === 'light' ? secondaryLightPalette : secondaryDarkPalette,
    },
  });
