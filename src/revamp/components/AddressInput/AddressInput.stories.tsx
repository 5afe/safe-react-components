import React from 'react';
import { ThemeProvider } from '@mui/system';

import AddressInput from './AddressInput';
import safeTheme from '../../theme/safeTheme';

export const AddressInputDemo = (): React.ReactElement => {
  return (
    <ThemeProvider theme={safeTheme}>
      <AddressInput />
    </ThemeProvider>
  );
};

export default {
  title: 'revamp/Components/AddressInput',
  component: AddressInputDemo,
  parameters: {
    componentSubtitle: 'Demo of the new AddressInput component revamp',
  },
};
