import React, { useState } from 'react';

import Checkbox from './index';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Checkbox Input.',
  },
};

export const SimpleCheckbox = (): React.ReactElement => {
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

export const WithError = (): React.ReactElement => {
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
