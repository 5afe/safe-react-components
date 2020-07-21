import React, { useState } from 'react';

import Switch from './index';

export default {
  title: 'Inputs/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: 'Switch input component.',
  },
};

export const SwitchInput = (): React.ReactElement => {
  const [enabled, setEnabled] = useState(true);
  return <Switch checked={enabled} onChange={setEnabled} />;
};
