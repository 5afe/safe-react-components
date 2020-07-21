import React from 'react';

import ButtonLink from './index';

export default {
  title: 'inputs/ButtonLink',
  component: ButtonLink,
  parameters: {
    componentSubtitle: 'Button component as a Link.',
  },
};

export const buttonLink = () => (
  <ButtonLink color="primary" iconType="add">
    Some text
  </ButtonLink>
);
