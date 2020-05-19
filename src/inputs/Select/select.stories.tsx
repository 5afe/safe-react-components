import React, { useState } from 'react';

import Select from './';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Checkbox Input.'
  }
};

const items = [
  { id: '1', label: 'ETH' },
  { id: '2', label: 'GNO' }
];

export const select = () => {
  const [activeItemId, setActiveItemId] = useState('');
  return (
    <Select
      items={items}
      activeItemId={activeItemId}
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
    />
  );
};
