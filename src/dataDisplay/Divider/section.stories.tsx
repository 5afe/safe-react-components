import React from 'react';

import Divider from './index';

export default {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: 'Handy status label'
  }
};

export const section = () => (
  <>
    <div>Some content</div>
    <Divider />
    <div>Some content2</div>
  </>
);
