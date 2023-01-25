import React from 'react';

import EthHashInfo from './';

export default {
  title: 'Components/EthHashInfo',
  component: EthHashInfo,
  parameters: {
    componentSubtitle: 'Demo of the new EthHashInfo component',
  },
};

export const Simple = (): React.ReactElement => {
  return (
    <EthHashInfo
      showPrefix
      prefix="eth"
      address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
      showCopyButton
      copyPrefix
      hasExplorer
      ExplorerButtonProps={{
        title: 'View on goerli.etherscan,io',
        href: 'https://goerli.etherscan.io/address/0x51A099ac1BF46D471110AA8974024Bfe518Fd6C4',
      }}
    />
  );
};

export const Prefixed = (): React.ReactElement => {
  return (
    <>
      <EthHashInfo
        showPrefix
        prefix="eth"
        shortAddress={false}
        address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
      />
    </>
  );
};

export const withCopyButton = (): React.ReactElement => {
  return (
    <EthHashInfo
      showPrefix
      prefix="eth"
      address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
      showCopyButton
      copyPrefix
    />
  );
};
