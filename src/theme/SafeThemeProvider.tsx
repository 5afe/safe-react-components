import * as React from 'react';
import { PaletteMode, Theme, ThemeProvider } from '@mui/material';
import createSafeTheme from './safeTheme';

type SafeThemeProviderProps = {
  children?: React.ReactNode;
  theme?: Theme;
  mode?: PaletteMode;
};

const SafeThemeProvider: React.FC<SafeThemeProviderProps> = ({
  children,
  theme,
  mode,
}) => {
  return (
    <ThemeProvider theme={theme || (mode && createSafeTheme(mode)) || {}}>
      {children}
    </ThemeProvider>
  );
};

export default SafeThemeProvider;
