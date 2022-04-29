import React from 'react';
import { ThemeProvider } from '@mui/system';

import EthHashInfo from './EthHashInfo';
import safeTheme from '../../theme/safeTheme';

export const EthHashInfoDemo = (): React.ReactElement => {
  return (
    <ThemeProvider theme={safeTheme}>
      <EthHashInfo />
    </ThemeProvider>
  );
};

export default {
  title: 'revamp/Components/EthHashInfo',
  component: EthHashInfoDemo,
  parameters: {
    componentSubtitle: 'Demo of the new EthHashInfo component revamp',
  },
};
