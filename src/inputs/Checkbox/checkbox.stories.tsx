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
    <Checkbox
      name="checkbox"
      checked={enabled}
      onChange={(_, checked) => setEnabled(checked)}
      label="Some checkbox"
    />
  );
};

export const error = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Checkbox
      name="checkboxWithError"
      meta={{ error: enabled ? undefined : 'required' }}
      checked={enabled}
      onChange={(_, checked) => setEnabled(checked)}
      label="Some checkbox"
    />
  );
};
