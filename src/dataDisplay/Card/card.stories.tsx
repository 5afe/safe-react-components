import React from 'react';

import Card from './index';
import { Title } from '../../index';

export default {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Useful to wrap content inside a styled container.',
  },
};

export const card = () => (
  <Card>
    <Title size="xs">Some text</Title>
  </Card>
);
