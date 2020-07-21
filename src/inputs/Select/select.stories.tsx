import React, { useState } from 'react';

import gnoIcon from './gnosis.png';
import daiIcon from './dai.png';
import tokenPlaceholder from './token-placeholder.svg';
import Select, { SelectItem } from './';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select Input.',
  },
};

export const SimpleSelect = (): React.ReactElement => {
  const items: Array<SelectItem> = [
    { id: '1', label: 'DAI', subLabel: 'stablecoin', iconUrl: daiIcon },
    { id: '2', label: 'GNO', iconUrl: gnoIcon },
    { id: '2', label: 'BrokenImage', iconUrl: 'https://broken-image.test' },
    { id: '3', label: 'without icon' },
  ];

  const [activeItemId, setActiveItemId] = useState('');
  return (
    <Select
      items={items}
      activeItemId={activeItemId}
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
      fallbackImage={tokenPlaceholder} // image source or URL
    />
  );
};
