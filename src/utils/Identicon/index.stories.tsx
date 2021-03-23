import React from 'react';

import Identicon from './index';

export default {
  title: 'Utils/Identicon',
  component: Identicon,
  parameters: {
    componentSubtitle: 'Identicon Component.',
  },
};

export const sizes = (): React.ReactElement => {
  return (
    <>
      <Identicon address="thisIsAnExample" size="xs" />
      <Identicon address="thisIsAnExample" size="sm" />
      <Identicon address="thisIsAnExample" size="md" />
      <Identicon address="thisIsAnExample" size="lg" />
      <Identicon address="thisIsAnExample" size="xl" />
      <Identicon address="thisIsAnExample" size="xxl" />
    </>
  );
};
