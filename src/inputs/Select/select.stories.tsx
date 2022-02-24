import React, { useState } from 'react';
import { Story } from '@storybook/react';
import Select, { SelectItem } from './';
import { SelectInputProps } from '@material-ui/core/Select/SelectInput';

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

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    componentSubtitle: 'Select Input.',
  },
  decorators: [
    (TheStory: any) => (
      <div style={{ width: '300px' }}>
        <TheStory />
      </div>
    ),
  ],
};

export const SimpleSelect: Story<SelectInputProps> = (
  args
): React.ReactElement => {
  const [activeItemId, setActiveItemId] = useState('');

  return (
    <Select
      id="simple-select"
      label="Select Token"
      name="default-select"
      items={items}
      activeItemId={activeItemId}
      fullWidth
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
      fallbackImage={'https://via.placeholder.com/32x32'} // image source or URL
      {...args}
    />
  );
};

export const ErrorSelect = (): React.ReactElement => {
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

export const DisabledSelect = (): React.ReactElement => {
  const [activeItemId, setActiveItemId] = useState('');

  return (
    <Select
      id="error-select"
      disabled
      label="Select Token"
      name="default-select"
      fullWidth
      items={items}
      activeItemId={activeItemId}
      onItemClick={(id) => {
        setActiveItemId(id);
      }}
      fallbackImage={'https://via.placeholder.com/32x32'} // image source or URL
    />
  );
};
