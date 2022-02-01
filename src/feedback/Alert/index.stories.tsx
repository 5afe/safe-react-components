import Link from '../../inputs/Link';
import React from 'react';

import { Alert, AlertTitle } from './index';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {},
};

export const AlertComponent = (): React.ReactElement => (
  <>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
    <br />
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert — <strong>check it out!</strong>
    </Alert>
    <br />
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      This is an info alert — <strong>check it out!</strong>
    </Alert>
    <br />
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  </>
);

export const ThirdPartyCookiesAlert = (): React.ReactElement => (
  <Alert severity="warning" onClose={() => console.log('onClose')}>
    <AlertTitle>
      Third party cookies disabled. Safe apps may not work properly under this
      circumstances.{' '}
      <Link href="#" size="xl" onClick={() => console.log('onClick')}>
        Edit Cookies
      </Link>{' '}
      to improve your experience.
    </AlertTitle>
  </Alert>
);
