import React from 'react';

import IconText from './index';

export default {
  title: 'Data Display/Icon Text',
  component: IconText,
  parameters: {
    componentSubtitle: 'IconText component'
  }
};

//export const title = () => <Title size="lg">Title LG</Title>;

export const sizes = () => {
  return (
    <>
      <IconText size="sm" iconType="add" text="Some text" />
      <IconText size="md" iconType="add" text="Some text" />
    </>
  );
};
