import React from 'react';

import { Accordion, AccordionSummary, AccordionDetails } from './index';
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
    <Accordion>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 1"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 2"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 3"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
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
    <Accordion compact>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 1"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
    <Accordion compact>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 2"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
    <Accordion compact>
      <AccordionSummary>
        <IconText
          iconSize="sm"
          textSize="xl"
          iconType="code"
          text="Transaction 3"
        />
      </AccordionSummary>
      <AccordionDetails>
        <Text size="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Text>
      </AccordionDetails>
    </Accordion>
  </div>
);
