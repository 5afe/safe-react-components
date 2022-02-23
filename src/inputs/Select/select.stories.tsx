import React, { useState } from 'react';

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
    {
      id: '1',
      label: 'DAI',
      subLabel: 'stablecoin',
      iconUrl: 'https://via.placeholder.com/64x64',
    },
    { id: '2', label: 'GNO', iconUrl: 'https://via.placeholder.com/128x128' },
    { id: '3', label: 'BrokenImage', iconUrl: 'https://broken-image.test' },
    { id: '4', label: 'without icon' },
  ];

  const [activeItemId, setActiveItemId] = useState('');
  return (
    <Select
      id="simple-select"
      label="Select Token"
      name="default-select"
      items={items}
      activeItemId={activeItemId}
      disabled={true}
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
      fallbackImage={'https://via.placeholder.com/32x32'} // image source or URL
    />
  );
};

export const ErrorSelect = (): React.ReactElement => {
  const items: Array<SelectItem> = [
    {
      id: '1',
      label: 'DAI',
      subLabel: 'stablecoin',
      iconUrl: 'https://via.placeholder.com/64x64',
    },
    { id: '2', label: 'GNO', iconUrl: 'https://via.placeholder.com/128x128' },
    { id: '2', label: 'BrokenImage', iconUrl: 'https://broken-image.test' },
    { id: '3', label: 'without icon' },
  ];

  const [activeItemId, setActiveItemId] = useState('');
  return (
    <Select
      id="error-select"
      label="Select Token"
      name="default-select"
      error="Something went wrong"
      helperText="Something went wrong"
      items={items}
      activeItemId={activeItemId}
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
      fallbackImage={'https://via.placeholder.com/32x32'} // image source or URL
    />
  );
};
