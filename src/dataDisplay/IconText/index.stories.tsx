import React from 'react';

import IconText from './index';

export default {
  title: 'Data Display/Icon Text',
  component: IconText,
  parameters: {
    componentSubtitle: 'IconText, It combines both Icon and Text component.'
  }
};

//export const title = () => <Title size="lg">Title LG</Title>;

export const sizes = () => {
  return (
    <>
      <IconText iconSize="sm" textSize="sm" iconType="add" text="Some text" />
      <IconText iconSize="sm" textSize="xl" iconType="add" text="Some text" />

      <IconText iconSize="md" textSize="sm" iconType="add" text="Some text" />
      <IconText iconSize="md" textSize="xl" iconType="add" text="Some text" />
    </>
  );
};
