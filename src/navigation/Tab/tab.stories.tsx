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
  { id: '2', label: 'Validating transaction', customLabel: <div>custom</div> },
  { id: '3', label: 'Deploying smart contract' },
  { id: '4', label: 'Generating your Safe', disabled: true },
  { id: '5', label: 'Result' }
];

export const stepper = () => {
  const [selected, setSelected] = useState('3');

  return (
    <>
      <Tab
        onChange={setSelected}
        color="error"
        selectedTab={selected}
        variant="outlined"
        items={items}
      />
      {selected}
    </>
  );
};

// export const stepWithError = () => (
//   <Stepper steps={steps} activeStepIndex={1} orientation="vertical" error />
// );

// export const orientationHorizontal = () => (
//   <Stepper steps={steps} activeStepIndex={1} orientation="horizontal" />
// );
