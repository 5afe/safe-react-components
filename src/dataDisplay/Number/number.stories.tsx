import React from 'react';
import Number from './index';

export default {
  title: 'Data Display/Number',
  component: Number,
  parameters: {
    componentSubtitle: 'Localized number formatting',
  },
};

export const formatNumberFunction = (): React.ReactElement => (
  <>
    Based upon the exported{' '}
    <code>formatGnosisNumber(value, {`{currency, showSign}`})</code> function.
  </>
);

export const SimpleNumber = (): React.ReactElement => (
  <Number value="1234324.234" />
);

export const Currency = (): React.ReactElement => (
  <Number value="999999.99" currency="EUR" />
);

export const LargeNumber = (): React.ReactElement => <Number value="10e14" />;
