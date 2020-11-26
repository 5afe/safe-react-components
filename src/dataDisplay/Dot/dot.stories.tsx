import React from 'react';

import { Dot, Text, Icon } from '../../index';

export default {
  title: 'Data Display/Dot',
  component: Dot,
  parameters: {
    componentSubtitle: 'Generic Dot container for text or icons.',
  },
};

export const DotWithText = (): React.ReactElement => (
  <Dot color="primary">
    <Text size="xl" color="white">
      1
    </Text>
  </Dot>
);

export const DotWithIcon = (): React.ReactElement => (
  <Dot color="rinkeby">
    <Icon color="white" type="check" size="sm" />
  </Dot>
);
