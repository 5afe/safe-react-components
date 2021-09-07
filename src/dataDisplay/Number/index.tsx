import React from 'react';

type FormatNumberOptions = {
  currency?: string;
  showSign?: boolean;
};

const DEFAULT_SHOW_SIGN = false;

// https://github.com/gnosis/safe/wiki/How-to-format-amounts
export const formatGnosisNumber = (
  value: string,
  { currency, showSign = DEFAULT_SHOW_SIGN }: FormatNumberOptions = {}
): string => {
  const number = +value;

  if (isNaN(number)) {
    return value;
  }

  const baseFormat = {
    signDisplay: showSign ? 'always' : 'auto', // Positive symbol
    ...(currency && {
      currency,
      style: 'currency',
    }),
  };

  const maxNumber = 10e14 - 1; // 999T
  const isMaxNumber = number >= maxNumber;
  const isSmallNumber = number < 0.00001 && number > -0.00001;

  if (isMaxNumber) {
    const format = { ...baseFormat, notation: 'compact' };

    return '>' + new Intl.NumberFormat([], format).format(maxNumber);
  } else if (isSmallNumber) {
    const lessThan = showSign ? '< ' : '<';
    const format = {
      ...baseFormat,
      minimumFractionDigits: 5,
    };

    return (
      lessThan +
      new Intl.NumberFormat([], format).format(number > 0 ? 0.00001 : -0.00001)
    );
  } else {
    const isAbbreviated = number >= 10e7;
    const format = {
      ...baseFormat,
      maximumFractionDigits: currency
        ? 2
        : number < 10e2
        ? 5
        : number < 10e3
        ? 4
        : number < 10e4
        ? 3
        : number < 10e5
        ? 2
        : number < 10e6
        ? 1
        : number < 10e7
        ? 0
        : 3, // M, B, T,
      ...(isAbbreviated && { minimumFractionDigits: 3, notation: 'compact' }), // 100.001M, 100.001B, etc.
    };

    return new Intl.NumberFormat([], format).format(number);
  }
};

type Props = {
  value: string;
} & FormatNumberOptions;

const Number = ({
  value,
  currency,
  showSign: plusMinus = DEFAULT_SHOW_SIGN,
}: Props): React.ReactElement => (
  <>{formatGnosisNumber(value, { currency, showSign: plusMinus })}</>
);

export default Number;
