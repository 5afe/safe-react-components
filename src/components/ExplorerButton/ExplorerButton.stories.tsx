import React from 'react';

import ExplorerButton from '.';

export const ExplorerLinkDemo = (): React.ReactElement => {
  return (
    <ExplorerButton
      href="https://goerli.etherscan.io/address/0x51A099ac1BF46D471110AA8974024Bfe518Fd6C4"
      title="View on goerli.etherscan.io"
    />
  );
};

export default {
  title: 'Components/ExplorerButton',
  component: ExplorerLinkDemo,
  parameters: {
    componentSubtitle: 'Demo of the ExplorerButton component',
  },
};
