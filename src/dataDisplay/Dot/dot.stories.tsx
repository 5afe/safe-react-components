import React from 'react';
import { Title } from '..';

import Dot from './index';

export default {
  title: 'Data Display/Dot',
  component: Dot,
  parameters: {
    componentSubtitle: 'Generic Dot container for text or icons.',
  },
};

export const Text = (): React.ReactElement => <Dot content="text" />;

export const Icon = (): React.ReactElement => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Dot content="icon" />
    <Title size="xs">Some title</Title>
  </div>
);
