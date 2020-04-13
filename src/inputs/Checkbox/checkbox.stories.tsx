import React, { useState } from 'react';

import Checkbox from './index';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Input used to toggle a value'
  }
};

export const checkbox = () => {
  const [enabled, setEnabled] = useState(true);
  return (
    <Checkbox checked={enabled} onChange={setEnabled} label="Some checkbox" />
  );
};

export const error = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Checkbox
      meta={{ error: 'required' }}
      checked={enabled}
      onChange={setEnabled}
      label="Some checkbox"
    />
  );
};
