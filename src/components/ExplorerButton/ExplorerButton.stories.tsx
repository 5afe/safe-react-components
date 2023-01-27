import * as React from 'react';

import ExplorerButton from '.';

export const Main = (): React.ReactElement => {
  return (
    <ExplorerButton
      href="https://goerli.etherscan.io/address/0x51A099ac1BF46D471110AA8974024Bfe518Fd6C4"
      title="View on goerli.etherscan.io"
    />
  );
};

export default {
  title: 'Components/ExplorerButton',
  component: Main,
  parameters: {
    componentSubtitle: 'A button for link and redirect to the address explorer',
  },
};
