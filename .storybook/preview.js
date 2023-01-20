import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';

import createSafeTheme from '../src/theme/safeTheme.tsx';
import { ThemeProvider } from '@mui/material';

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={createSafeTheme('light')}>{storyFn()}</ThemeProvider>
  </>
));

addParameters({
  options: {
    showRoots: false,
  },
});
