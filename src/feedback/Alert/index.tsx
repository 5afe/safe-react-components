import React from 'react';
import { makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import MuiAlertTitle from '@material-ui/lab/AlertTitle';
import { Color, AlertTitleProps } from '@material-ui/lab';
import theme from '../../theme';

const useAlertStyles = makeStyles({
  root: {
    color: theme.colors.text,
  },
  standardWarning: {
    backgroundColor: theme.colors.pendingTagHover,
  },
});

type Props = {
  severity: Color;
  onClose?: () => void;
};

const Alert: React.FC<Props> = ({
  severity,
  onClose,
  children,
}): React.ReactElement => {
  const classes = useAlertStyles();

  return (
    <MuiAlert severity={severity} classes={classes} onClose={onClose}>
      {children}
    </MuiAlert>
  );
};

const useAlertTitleStyles = makeStyles({
  root: {
    color: theme.colors.text,
  },
});

const AlertTitle = (props: AlertTitleProps): React.ReactElement => {
  const classes = useAlertTitleStyles();

  return <MuiAlertTitle {...props} classes={classes} />;
};

export { Alert, AlertTitle };
