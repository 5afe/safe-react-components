import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Text, IconText } from '../../index';
import styled from 'styled-components';

/* type Props = {
  compact?: boolean;
}; */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    '.MuiAccordionSummary-root.Mui-expanded': {
      minHeight: '48px',
    },
    '.MuiAccordionSummary-content.Mui-expanded': {
      margin: '12px 0',
    },
    '.MuiAccordion-root.Mui-expanded': {
      margin: '0',
    },
  })
);

const StyledAccordion = styled(Accordion)`
  &.MuiAccordion-root {
    border-bottom: 2px solid ${({ theme }) => theme.colors.separator};
  }
  &.MuiAccordion-root.Mui-expanded {
    margin: 0;
  }
  & .MuiCollapse-wrapper {
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator};

  &.MuiAccordionSummary-root.Mui-expanded {
    min-height: 48px;
  }

  & .MuiAccordionSummary-content.Mui-expanded {
    margin: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAccordion square elevation={0}>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>
            <IconText
              iconSize="sm"
              textSize="xl"
              iconType="code"
              text="Transaction 1"
            />
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Text>
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion square elevation={0}>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <Typography className={classes.heading}>
            <IconText
              iconSize="sm"
              textSize="xl"
              iconType="code"
              text="Transaction 2"
            />
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Text>
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion square elevation={0}>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header">
          <Typography className={classes.heading}>
            <IconText
              iconSize="sm"
              textSize="xl"
              iconType="code"
              text="Transaction 3"
            />
          </Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Typography>
            <Text size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Text>
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}
