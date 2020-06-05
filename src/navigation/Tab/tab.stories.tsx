import React, { useState } from 'react';

import Tab, { Item } from './index';

export default {
  title: 'Navigation/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: 'Tab component used in Safe Multisig.'
  }
};

const items: Item[] = [
  { id: '1', label: 'Transaction submitted', icon: 'add' },
  { id: '2', label: 'Validating transaction' },
  { id: '3', label: 'Deploying smart contract' },
  { id: '4', label: 'Generating your Safe', disabled: true },
  { id: '5', label: 'Result', customLabel: <div>custom</div> }
];

export const stepper = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        color="error"
        selectedTab={selected}
        items={items}
      />
      {selected}
    </>
  );
};

export const stepperContained = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        color="error"
        selectedTab={selected}
        variant="contained"
        items={items}
      />
      {selected}
    </>
  );
};

export const stepperVertical = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        color="error"
        variant="contained"
        orientation="vertical"
        onChange={setSelected}
        selectedTab={selected}
        items={items}
      />
      {selected}
    </>
  );
};
