import React, { ReactNode, ReactElement } from 'react';
import AccordionMUI, {
  AccordionProps as AccordionPropsMUI,
} from '@material-ui/core/Accordion';
import AccordionSummaryMUI from '@material-ui/core/AccordionSummary';
import AccordionDetailsMUI from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from 'styled-components';
type AccordionProps = {
  compact?: boolean;
};
export const StyledAccordion = styled(AccordionMUI)<AccordionProps>`
  &.MuiAccordion-root {
    border-radius: ${({ compact }) => (compact ? '8px' : '0')};
    border: ${({ compact, theme }) =>
      compact ? '2px solid ' + theme.colors.separator : 'none'};
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
    margin-bottom: ${({ compact }) => (compact ? '16px' : '0')};
    overflow: hidden;

    &:before {
      height: 0;
    }
    &:first-child {
      border-top: 2px solid ${({ theme }) => theme.colors.separator};
    }
    &.Mui-expanded {
      margin: ${({ compact }) => (compact ? '0 0 16px 0' : '0')};
    }
  }
`;
export const AccordionSummary = styled(AccordionSummaryMUI)<AccordionProps>`
  &.MuiAccordionSummary-root {
    &.Mui-expanded {
      min-height: 48px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
      margin-bottom: ${({ compact }) => (compact ? '16px' : '0')};
      background-color: ${({ theme }) => theme.colors.background};
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: ${({ compact }) => (compact ? '8px' : '0')};
    }
    .MuiAccordionSummary-content {
      &.Mui-expanded {
        margin: 0;
      }
    }
  }
`;
export const AccordionDetails = styled(AccordionDetailsMUI)``;
type Props = Partial<AccordionPropsMUI> & {
  compact?: boolean;
  summaryContent: ReactNode;
  detailsContent: ReactNode;
};
const Accordion = ({
  compact,
  summaryContent,
  detailsContent,
  ...props
}: Props): ReactElement => {
  return (
    <StyledAccordion square elevation={0} compact={compact} {...props}>
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
