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
  return <EthHashInfo address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D" />;
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
