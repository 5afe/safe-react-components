import React from 'react';

import AddressInfo from './index';
import { EllipsisMenuItem } from '../..';

export default {
  title: 'Ethereum/Eth hash Info',
  component: AddressInfo,
  parameters: {
    componentSubtitle: 'Display Address/Tx information.',
  },
};

const hash = '0x69904ff6d6100799344E5C9A2806936318F6ba4f';

export const Address = (): React.ReactElement => <AddressInfo hash={hash} />;

export const WithShortAddress = (): React.ReactElement => (
  <AddressInfo hash={hash} shortenHash={4} />
);

export const WithName = (): React.ReactElement => (
  <AddressInfo hash={hash} name="Owner 1" />
);

export const WithIdenticon = (): React.ReactElement => (
  <AddressInfo hash={hash} showIdenticon shortenHash={4} />
);

export const WithButtons = (): React.ReactElement => (
  <AddressInfo
    hash={hash}
    name="Owner 1"
    showIdenticon
    showCopyBtn
    showEtherscanBtn
    shortenHash={4}
  />
);

export const WithMenu = (): React.ReactElement => {
  const items: EllipsisMenuItem[] = [
    { label: 'Send again', disabled: true, onClick: console.log },
    { label: 'Edit Address book entry', onClick: console.log },
  ];
  return (
    <AddressInfo
      hash={hash}
      name="Owner 1"
      showIdenticon
      showCopyBtn
      showEtherscanBtn
      menuItems={items}
      shortenHash={4}
    />
  );
};
