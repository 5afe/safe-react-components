import React from 'react';

import Title from './index';

export default {
  title: 'Data Display/Title',
  component: Title,
  parameters: {
    componentSubtitle: 'Title Component.',
  },
};

export const SimpleTitle = (): React.ReactElement => (
  <Title size="lg">Title LG</Title>
);

export const WithSizes = (): React.ReactElement => {
  return (
    <>
      <Title size="xl">Title XL</Title>
      <Title size="lg">Title LG</Title>
      <Title size="md">Title MD</Title>
      <Title size="sm">Title SM</Title>
      <Title size="xs">Title XS</Title>
    </>
  );
};

export const Bold = (): React.ReactElement => (
  <>
    <Title size="lg" strong>
      Title LG
    </Title>
    <Title size="md" strong>
      Title MD
    </Title>
  </>
);
