import React from 'react';

import Identicon from './index';

export default {
  title: 'Utils/Identicon',
  component: Identicon,
  parameters: {
    componentSubtitle: 'Identicon Component.'
  }
};

export const sizes = () => {
  return (
    <>
      <Identicon address="thisIsAnExample" size="sm" />
      <Identicon address="thisIsAnExample" size="md" />
      <Identicon address="thisIsAnExample" size="lg" />
    </>
  );
};
