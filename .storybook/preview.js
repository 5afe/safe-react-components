import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';
import GlobalStyles from '../src/global';

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
));

addParameters({
  options: {
    showRoots: false,
  },
});
