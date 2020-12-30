import React from 'react';

import Accordion from './index';
import { Card, Text, IconText } from '../../index';

export default {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle: 'Expansion panels with Summary and Detail content.',
  },
};

export const SimpleAccordion = (): React.ReactElement => (
  <Card>
    <Accordion
      summaryContent={
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 1"
        />
      }
      detailsContent={
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      }
    />
    <Accordion
      summaryContent={
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 2"
        />
      }
      detailsContent={
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      }
    />
    <Accordion
      summaryContent={
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 3"
        />
      }
      detailsContent={
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      }
    />
  </Card>
);

export const CompactAccordion = (): React.ReactElement => (
  <div
    style={{
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
    <Accordion
      compact
      summaryContent={
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 1"
        />
      }
      detailsContent={
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      }
    />
    <Accordion
      compact
      summaryContent={
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 2"
        />
      }
      detailsContent={
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      }
    />
  </div>
);
