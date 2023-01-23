import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

import {
  Stack,
  ThemeProvider,
  Typography,
  IconButton,
  CssBaseline,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import createSafeTheme from '../src/theme/safeTheme.tsx';
import useThemeMode from '../src/hooks/useThemeMode';

addDecorator((storyFn) => {
  const { switchThemeMode, themeMode } = useThemeMode();

  return (
    <ThemeProvider theme={createSafeTheme(themeMode)}>
      <CssBaseline />
      <Stack spacing={2} direction="row" alignItems="center">
        {/* dark mode switch */}
        <Typography>{themeMode} mode</Typography>
        <IconButton onClick={switchThemeMode} color="inherit">
          {themeMode === 'light' ? (
            <Brightness4Icon /> // light theme mode icon
          ) : (
            <Brightness7Icon /> // dark theme mode icon
          )}
        </IconButton>
      </Stack>
      {storyFn()}
    </ThemeProvider>
  );
});

addParameters({
  options: {
    showRoots: false,
  },
});
