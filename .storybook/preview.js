import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

import { getSafeTheme } from '../src/theme/safeTheme.tsx';
import { ThemeProvider } from '@mui/material';

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={getSafeTheme('light')}>{storyFn()}</ThemeProvider>
  </>
));

addParameters({
  options: {
    showRoots: false,
  },
});
