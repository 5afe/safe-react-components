import React, { useState } from 'react';

import Tab, { Item } from './index';

export default {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: 'Tab component used in Safe Multisig.',
  },
};

const items: Item[] = [
  { id: '1', label: 'Assets', icon: 'assets' },
  { id: '2', label: 'Transactions', icon: 'transactionsInactive' },
  { id: '3', label: 'Apps', icon: 'apps' },
  { id: '4', label: 'Address Book', icon: 'addressBook', disabled: true },
  { id: '5', label: 'Settings', customContent: <div>custom</div> },
];

export const SimpleTab = (): React.ReactElement => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        selectedTab={selected}
        variant="outlined"
        items={items}
      />
      {selected}
    </>
  );
};

export const TabContained = (): React.ReactElement => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        selectedTab={selected}
        variant="contained"
        items={items}
      />
      {selected}
    </>
  );
};

export const TabContainedFull = (): React.ReactElement => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        selectedTab={selected}
        variant="contained"
        items={items}
        fullWidth
      />
      {selected}
    </>
  );
};
