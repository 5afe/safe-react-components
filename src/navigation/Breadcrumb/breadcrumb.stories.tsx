import React from 'react';

import Breadcrumb from './index';
import { Text } from '../../index';

export default {
  title: 'navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle: 'Breadcrumb component used in Safe Multisig.',
  },
};

export const Breadcrumbs = (): React.ReactElement => <Breadcrumb />;

export const SubSection = (): React.ReactElement => (
  <>
    <Breadcrumb />
    <Text size="sm">dss</Text>
  </>
);
