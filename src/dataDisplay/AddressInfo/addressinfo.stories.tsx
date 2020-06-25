import React from 'react';

import AddressInfo from './index';

export default {
  title: 'Data Display/Address Info',
  component: AddressInfo,
  parameters: {
    componentSubtitle: 'Display Address information.'
  }
};

export const section = () => (
  <>
    <AddressInfo />
  </>
);