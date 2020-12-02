import React from 'react';

import Card from './index';
import { Button, Dot, Title, Text } from '../../index';

export default {
  title: 'Data Display/Card',
  component: Card,
  parameters: {
    componentSubtitle: 'Useful to wrap content inside a styled container.',
  },
};

export const SimpleCard = (): React.ReactElement => (
  <Card>
    <Dot color="primary">
      <Text size="xl" color="white">
        1
      </Text>
    </Dot>
    <Title size="xs">Some text</Title>
    <Button
      size="lg"
      iconType="safe"
      color="secondary"
      variant="bordered"
      iconSize="sm">
      <Text size="xl" color="secondary">
        Load Safe
      </Text>
    </Button>
  </Card>
);

export const CardDisabled = (): React.ReactElement => (
  <Card disabled>
    <Dot color="primary">
      <Text size="xl" color="white">
        1
      </Text>
    </Dot>
    <Title size="xs">Some text</Title>
    <Button
      size="lg"
      iconType="safe"
      color="secondary"
      variant="bordered"
      iconSize="sm">
      <Text size="xl" color="secondary">
        Load Safe
      </Text>
    </Button>
  </Card>
);
