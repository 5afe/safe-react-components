import React from 'react';

import Menu from './index';
import { ButtonLink } from '../../index';

export default {
  title: 'navigation/Menu',
  component: Menu,
  parameters: {
    componentSubtitle: 'Menu component used in Safe Multisig.',
  },
};

export const Loader = (): React.ReactElement => (
  <Menu>
    <ButtonLink color="primary">Item 1</ButtonLink>
    <ButtonLink color="error" iconType="delete">
      Item 2
    </ButtonLink>
  </Menu>
);
