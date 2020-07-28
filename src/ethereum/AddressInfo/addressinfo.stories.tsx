import React from 'react';

import AddressInfo from './index';
import { EllipsisMenuItem } from '../..';

export default {
  title: 'Ethereum/Address Info',
  component: AddressInfo,
  parameters: {
    componentSubtitle: 'Display Address information.',
  },
};

const address = '0x69904ff6d6100799344E5C9A2806936318F6ba4f';

export const Address = (): React.ReactElement => (
  <AddressInfo address={address} />
);

export const WithShortAddress = (): React.ReactElement => (
  <AddressInfo address={address} shortenAddress={4} />
);

export const WithOwner = (): React.ReactElement => (
  <AddressInfo address={address} name="Owner 1" />
);

export const WithIdenticon = (): React.ReactElement => (
  <AddressInfo address={address} showIdenticon shortenAddress={4} />
);

export const WithButtons = (): React.ReactElement => (
  <AddressInfo
    address={address}
    name="Owner 1"
    showIdenticon
    showCopy
    showEtherscan
    shortenAddress={4}
  />
);

export const WithMenu = (): React.ReactElement => {
  const items: EllipsisMenuItem[] = [
    { label: 'Send again', disabled: true, onClick: console.log },
    { label: 'Edit Address book entry', onClick: console.log },
  ];
  return (
    <AddressInfo
      address={address}
      name="Owner 1"
      showIdenticon
      showCopy
      showEtherscan
      menuItems={items}
      shortenAddress={4}
    />
  );
};
