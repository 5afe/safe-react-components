import React from 'react';
import { ThemeProvider } from '@mui/system';

import ExplorerButton from './ExplorerButton';
import safeTheme from '../../theme/safeTheme';

export const ExplorerButtonDemo = (): React.ReactElement => {
  return (
    <ThemeProvider theme={safeTheme}>
      <ExplorerButton />
    </ThemeProvider>
  );
};

export default {
  title: 'revamp/Components/ExplorerButton',
  component: ExplorerButtonDemo,
  parameters: {
    componentSubtitle: 'Demo of the new ExplorerButton component revamp',
  },
};
