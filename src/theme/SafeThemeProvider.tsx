import * as React from 'react';
import { PaletteMode, Theme, ThemeProvider } from '@mui/material';
import createSafeTheme from './safeTheme';

type SafeThemeProviderProps = {
  children: (theme: Theme) => React.ReactNode;
  mode: PaletteMode;
};

const SafeThemeProvider: React.FC<SafeThemeProviderProps> = ({
  children,
  mode,
}) => {
  const theme = React.useMemo(() => createSafeTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children(theme)}</ThemeProvider>;
};

export default SafeThemeProvider;
