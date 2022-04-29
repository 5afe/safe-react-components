import { Theme, PaletteMode } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';
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

const safeTheme: Theme = responsiveFontSizes(createTheme(safeThemeOptions));

export default safeTheme;

export const getSafeTheme = (mode: PaletteMode): Theme =>
  responsiveFontSizes(
    createTheme({
      ...safeThemeOptions,
      palette: {
        ...safeThemeOptions.palette,
        mode: mode,
        // see more details in the docs https://mui.com/material-ui/customization/dark-mode/
        secondary:
          mode === 'light' ? secondaryLightPalette : secondaryDarkPalette,
      },
    })
  );
