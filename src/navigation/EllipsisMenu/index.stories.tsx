import React from 'react';

import EllipsisMenu, { EllipsisMenuItem } from './index';

export default {
  title: 'navigation/EllipsisMenu',
  component: EllipsisMenu,
  parameters: {
    componentSubtitle: 'Ellipsis Menu component used in Safe Multisig.',
  },
};

const items: EllipsisMenuItem[] = [
  { label: 'Item 1', disabled: true, onClick: console.log },
  { label: 'Item 2', onClick: console.log },
];

export const SimpleEllipsisMenu = (): React.ReactElement => (
  <EllipsisMenu menuItems={items} />
);
