import React from 'react';
import Amount from './index';

export default {
  title: 'Data Display/Amount',
  component: Amount,
  parameters: {
    componentSubtitle: 'Localized number formatting',
  },
};

export const formatNumberFunction = (): React.ReactElement => (
  <>
    Based upon the exported{' '}
    <code>formatAmount(value, {`{currency, showSign}`})</code> function.
  </>
);

export const SimpleNumber = (): React.ReactElement => (
  <Amount value="1234324.234" />
);

export const Currency = (): React.ReactElement => (
  <Amount value="999999.99" currency="EUR" />
);

export const LargeNumber = (): React.ReactElement => <Amount value="10e14" />;
