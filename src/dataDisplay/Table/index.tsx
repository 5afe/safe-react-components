import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

import theme from '../../theme'; 
import Icon from '../Icon';
import Text from '../Text';

const useStyles = makeStyles({
  table: {
  //  minWidth: 450

  '& .MuiTableRow-root:hover': {
    backgroundColor: theme.colors.background,
    cursor: 'pointer'
  },
  }
});

const TextTHead = styled(Text)`
  text-transform: uppercase;
`;

const StyledTableCell = styled(TableCell)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.separator} !important;
`;

function createData(
  name: string,
  spent: number,
  reset: number,
  other1: number,
  other: number
) {
  return {
    name,
    spent,
    reset,
    other,
    other1: (
      <Text color="text" size="md">
        {other1}
      </Text>
    ),
    other2: (
      <>
        <Icon size="sm" type="edit" color="icon" />
        <Icon size="sm" type="delete" color="icon" />
      </>
    )
  };
}

const rows = [
  createData('Owner #1', 159, 6.0, 24, 4.0),
  createData('Owner #2', 237, 9.0, 37, 4.3),
  createData('Owner #3', 262, 16.0, 24, 6.0),
  createData('Owner #4', 305, 3.7, 67, 4.3),
  createData('Owner #5', 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <TextTHead size="sm" color="secondaryLight" strong>
                Beneficiary
              </TextTHead>
            </StyledTableCell>
            <StyledTableCell>
              <TextTHead size="sm" color="secondaryLight" strong>
                Spent
              </TextTHead>
            </StyledTableCell>
            <StyledTableCell>
              <TextTHead size="sm" color="secondaryLight" strong>
                Reset time
              </TextTHead>
            </StyledTableCell>
            <StyledTableCell>
              <TextTHead size="sm" color="secondaryLight" strong>
                Other
              </TextTHead>
            </StyledTableCell>
            <StyledTableCell>
              <TextTHead size="sm" color="secondaryLight" strong>
                Actions
              </TextTHead>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Text color="text" size="md">{row.name}</Text>
              </StyledTableCell>
              <StyledTableCell>
                <Text color="text" size="md">{row.spent}</Text>
              </StyledTableCell>
              <StyledTableCell>
                <Text size="md">{row.reset}</Text>
              </StyledTableCell>
              <StyledTableCell>
              {row.other1}
              </StyledTableCell>
              <StyledTableCell>
              {row.other2}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
