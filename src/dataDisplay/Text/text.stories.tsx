import React from 'react';

import Text from './index';

export default {
  title: 'Data Display/Text',
  component: Text,
  parameters: {
    componentSubtitle: 'Text component, it allows several configurations',
  },
};

export const SimpleTexttext = (): React.ReactElement => (
  <Text size="sm">Some Text...</Text>
);

export const Bold = (): React.ReactElement => (
  <Text size="sm" strong>
    Some Text...
  </Text>
);

export const Centered = (): React.ReactElement => (
  <Text size="sm" center>
    Some Text...
  </Text>
);

export const CustomSize = (): React.ReactElement => (
  <>
    <Text size="sm">Some Text...</Text>
    <Text size="md">Some Text...</Text>
    <Text size="lg">Some Text...</Text>
    <Text size="xl">Some Text...</Text>
  </>
);

export const CustomColor = (): React.ReactElement => (
  <Text size="sm" color="primary">
    Some Text...
  </Text>
);

export const WithTooltip = (): React.ReactElement => (
  <Text size="sm" color="primary" tooltip="some other text" as="span">
    Some Text...
  </Text>
);

export const ParagraphElement = (): React.ReactElement => (
  <>
    <Text size="sm">Paragraph element is by default</Text>
    <Text size="sm">Some Text...</Text>
  </>
);

export const SpanElement = (): React.ReactElement => (
  <>
    <Text size="sm" as="span">
      This are span elements.
    </Text>
    <Text size="sm" as="span">
      Some Text in a span...
    </Text>
  </>
);
