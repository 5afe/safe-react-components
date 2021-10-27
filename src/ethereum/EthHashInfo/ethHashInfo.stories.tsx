import React from 'react';

import EthHashInfo from './index';
import { EllipsisMenuItem } from '../..';

export default {
  title: 'Ethereum/Eth hash Info',
  component: EthHashInfo,
  parameters: {
    componentSubtitle: 'Display Address/Tx information.',
  },
};

const hash = '0x69904ff6d6100799344E5C9A2806936318F6ba4f';
const explorerUrl = `https://etherscan.io/address/${hash}`;
const explorerUrlAlt = `Show details on Etherscan`;

export const Address = (): React.ReactElement => <EthHashInfo hash={hash} />;

export const WithShortAddress = (): React.ReactElement => (
  <EthHashInfo hash={hash} shortenHash={4} />
);

export const WithName = (): React.ReactElement => (
  <EthHashInfo hash={hash} name="Owner 1" />
);

export const WithDefaultAvatar = (): React.ReactElement => (
  <EthHashInfo hash={hash} showAvatar shortenHash={4} />
);

export const WithCustomAvatar = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    showAvatar
    customAvatar="https://gnosis-safe-token-logos.s3.amazonaws.com/0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa.png"
    shortenHash={4}
  />
);

export const WithCustomAvatarFallback = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    showAvatar
    customAvatar="https://broken.png"
    customAvatarFallback="https://gnosis-safe-token-logos.s3.amazonaws.com/0x6810e776880C02933D47DB1b9fc05908e5386b96.png"
    shortenHash={4}
  />
);

export const WithCustomAvatarFallbackIdenticon = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    showAvatar
    customAvatar="https://no-file.png"
    shortenHash={4}
  />
);

export const WithButtons = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    name="Owner 1"
    showAvatar
    showCopyBtn
    explorerUrl={() => ({ alt: explorerUrlAlt, url: explorerUrl })}
    shortenHash={4}
  />
);

export const WithShowShortNameAndShortHash = (): React.ReactElement => (
  <EthHashInfo
    shortName="matic"
    hash={hash}
    name="Owner 1"
    showAvatar
    showCopyBtn
    explorerUrl={() => ({ alt: explorerUrlAlt, url: explorerUrl })}
    shortenHash={4}
    shouldShowShortName
  />
);

export const WithShowShortName = (): React.ReactElement => (
  <EthHashInfo
    shortName="xdai"
    hash={hash}
    name="Owner 1"
    showAvatar
    showCopyBtn
    explorerUrl={() => ({ alt: explorerUrlAlt, url: explorerUrl })}
    shouldShowShortName
  />
);

export const WithShowAndCopyShortName = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    name="Owner 1"
    showAvatar
    showCopyBtn
    explorerUrl={() => ({ alt: explorerUrlAlt, url: explorerUrl })}
    shortName="arb"
    shouldShowShortName
    shouldCopyShortName
  />
);

export const WithCopyShortName = (): React.ReactElement => (
  <EthHashInfo
    hash={hash}
    name="Owner 1"
    showAvatar
    showCopyBtn
    explorerUrl={() => ({ alt: explorerUrlAlt, url: explorerUrl })}
    shortName="rin"
    shouldCopyShortName
  />
);

export const WithMenu = (): React.ReactElement => {
  const items: EllipsisMenuItem[] = [
    { label: 'Send again', disabled: true, onClick: console.log },
    { label: 'Edit Address book entry', onClick: console.log },
  ];
  return (
    <EthHashInfo
      hash={hash}
      name="Owner 1"
      showAvatar
      showCopyBtn
      menuItems={items}
      shortenHash={4}
    />
  );
};

export const WithAvatarAndText = (): React.ReactElement => (
  <EthHashInfo hash={hash} showHash={false} name="Owner 1" showAvatar />
);
