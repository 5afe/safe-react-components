import React from 'react';

import ButtonLink from './index';

export default {
  title: 'inputs/ButtonLink',
  component: ButtonLink,
  parameters: {
    componentSubtitle: 'Button component as a Link.',
  },
};

export const SimpleButtonLink = (): React.ReactElement => (
  <ButtonLink color="primary" iconType="add">
    Some text
  </ButtonLink>
);

export const IconSize = (): React.ReactElement => (
  <>
    <ButtonLink color="primary" iconType="add" iconSize="sm">
      Small Icon
    </ButtonLink>
    <ButtonLink color="primary" iconType="add" iconSize="md">
      Big Icon
    </ButtonLink>
  </>
);
