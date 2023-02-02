import * as React from 'react';

import AddressInput from '.';

export const Main = (): React.ReactElement => {
  return <AddressInput />;
};

export default {
  title: 'Components/AddressInput',
  component: Main,
  parameters: {
    componentSubtitle: 'Advanced address input',
  },
};
