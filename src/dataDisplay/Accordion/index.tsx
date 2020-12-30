import React, { ReactNode, ReactElement } from 'react';
import AccordionMUI from '@material-ui/core/Accordion';
import AccordionSummaryMUI from '@material-ui/core/AccordionSummary';
import AccordionDetailsMUI from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';

type AccordionProps = {
  compact?: boolean;
};

export const StyledAccordion = styled(AccordionMUI)<AccordionProps>`
  &.MuiAccordion-root {
    /* width: ${({ compact }) => (compact ? '70%' : '100%')}; */
    border-radius: ${({ compact }) => (compact ? '8px' : '0')};
    border: ${({ compact, theme }) =>
      compact ? '2px solid ' + theme.colors.separator : 'none'};
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
    margin-bottom: ${({ compact }) => (compact ? '16px' : '0')};
  }
  &.MuiAccordion-root:first-child {
    border-top: 2px solid ${({ theme }) => theme.colors.separator};
  }
  &.MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
  & .MuiCollapse-wrapper {
  }
`;

export const AccordionSummary = styled(AccordionSummaryMUI)<AccordionProps>`
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};

  &.MuiAccordionSummary-root.Mui-expanded {
    min-height: 48px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
    margin-bottom: ${({ compact }) => (compact ? '16px' : '0')};
  }

  & .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const AccordionDetails = styled(AccordionDetailsMUI)``;

type Props = {
  compact?: boolean;
  summaryContent: ReactNode;
  detailsContent: ReactNode;
};

const Accordion = ({
  compact,
  summaryContent,
  detailsContent,
}: Props): ReactElement => {
  return (
    <StyledAccordion square elevation={0} compact={compact}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        {summaryContent}
      </AccordionSummary>
      <AccordionDetails>{detailsContent} </AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
