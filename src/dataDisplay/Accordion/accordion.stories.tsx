import React from 'react';

import Accordion from './index';
import { Card, Title, Text } from '../../index';

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle: 'Useful to wrap content inside a styled container.',
  },
};

export const SimpleAccordion = (): React.ReactElement => (
  <Card>
    <Accordion />
  </Card>
);


export const CompactAccordion = (): React.ReactElement => (
  <Card>
    <Accordion />
  </Card>
);