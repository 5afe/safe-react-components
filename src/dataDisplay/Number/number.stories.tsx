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
    <code>
      formatNumber(value,{' '}
      {`{roundingType,
  showDecimals,
  decimalPlaces,
  showThousandSeparators,
  currency}`}
      )
    </code>{' '}
    function.
  </>
);

export const SimpleNumber = (): React.ReactElement => (
  <Number value="1234324.234" decimalPlaces={2} showThousandSeparators />
);

export const ThousandSeparators = (): React.ReactElement => (
  <Number value="999999.99" showThousandSeparators />
);

export const RestrictedNumberOfDecimals = (): React.ReactElement => (
  <Number value="3.14159265359" decimalPlaces={2} />
);

export const DecimalPlaceRemoval = (): React.ReactElement => (
  <Number value="123.456" showDecimals={false} />
);

export const RoundedNumbers = (): React.ReactElement => (
  <p>
    This number is rounded up: <Number value="99.99" roundingType="up" />. This
    number is rounded down: <Number value="99.99" roundingType="down" />.
  </p>
);

export const Currency = (): React.ReactElement => (
  <Number value="1.99" currency="EUR" />
);
