import React from 'react';

import Breadcrumb from './index';

export default {
  title: 'navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    componentSubtitle: 'Breadcrumb component used in Safe Multisig.',
  },
};

export const Breadcrumbs = (): React.ReactElement => (
  <Breadcrumb
    iconType="addressBook"
    mainLevelText="Address Book"
    subLevelsList={['Second Level']}
  />
);

export const SubSection = (): React.ReactElement => (
  <Breadcrumb
    iconType="addressBook"
    mainLevelText="Address Book"
    subLevelsList={['Second Level', 'Third Level', 'Fourth Level']} />
);
