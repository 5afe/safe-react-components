import React from 'react';

import CopyIcon from '@mui/icons-material/FileCopy';
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
    <EthHashInfo
      prefix="eth"
      address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
    />
  );
};

export const withCopyButton = (): React.ReactElement => {
  return (
    <EthHashInfo
      prefix="eth"
      address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
      icon={
        <img src="https://avatars.githubusercontent.com/u/25136207?s=200&v=4" />
      }
      copyButton={<CopyIcon />}
    />
  );
};

export const withIcon = (): React.ReactElement => {
  return (
    <EthHashInfo
      prefix="eth"
      address="0x40A2aCCbd92BCA938b02010E17A5b8929b49130D"
      icon={
        <img src="https://avatars.githubusercontent.com/u/25136207?s=200&v=4" />
      }
    />
  );
};
