import React from 'react';

import Identicon from './index';

export default {
  title: 'Data Display/Identicon',
  component: Identicon,
  parameters: {
    componentSubtitle: 'Identicon Component.'
  }
};

export const sizes = () => {
  return <Identicon address={"thisisanexample"} diameter={'md'}/>;
};
