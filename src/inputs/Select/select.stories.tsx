import React, { useState } from 'react';

import gnoIcon from './gnosis.png';
import daiIcon from './dai.png';
import Select, { SelectItem } from './';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Checkbox Input.'
  }
};

export const select = () => {
  const items: Array<SelectItem> = [
    { id: '1', label: 'DAI asd asd ', title: 'Title', iconUrl: daiIcon },
    { id: '2', label: 'GNO', iconUrl: gnoIcon },
    { id: '3', label: 'without icon' }
  ];

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
