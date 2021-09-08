import React from 'react';

// https://github.com/gnosis/safe/wiki/How-to-format-amounts
const DEFAULT_SHOW_SIGN = false;

type Options = {
  currency?: string;
  showSign?: boolean;
};

export const formatGnosisNumber = (
  value: string,
  { currency, showSign = DEFAULT_SHOW_SIGN }: Options = {}
): string => {
  const number = +value;

  if (isNaN(number)) {
    return value;
  }

  const formatNumber = (
    number: number,
    format: Intl.NumberFormatOptions,
    prefix: string = ''
  ) => {
    const baseFormat: Intl.NumberFormatOptions = {
      signDisplay: showSign ? 'always' : 'auto', // Positive symbol
      ...(currency && {
        currency,
        style: 'currency',
      }),
    };

    return (
      (prefix && showSign ? `${prefix} ` : prefix) + // Add space if displaying +/- signs
      new Intl.NumberFormat([], {
        ...baseFormat,
        ...format,
      }).format(number)
    );
  };

  const isSmallNumber = number < 0.00001 && number > -0.00001; // <0.00001
  const isMaxNumber = (number >= 10e14 || number <= -10e14) && !isSmallNumber; // >999T
  const isPositive = number > 0;

  if (isSmallNumber) {
    // <0.00001
    return formatNumber(
      isPositive ? 0.00001 : -0.00001,
      { minimumFractionDigits: 5 },
      '<'
    );
  } else if (isMaxNumber) {
    // >999T
    return formatNumber(
      isPositive ? 999e12 : -999e12,
      { notation: 'compact' },
      '>'
    );
  } else {
    const isAbbreviated = number >= 10e7;
    const format: Intl.NumberFormatOptions = {
      maximumFractionDigits: currency
        ? 2 // Currencies only have two decimals
        : number < 10e2
        ? 5 // 100.00001
        : number < 10e3
        ? 4 // 1,000.0001
        : number < 10e4
        ? 3 // 10,000.001
        : number < 10e5
        ? 2 // 100,000.01
        : number < 10e6
        ? 1 // 1,000,000.1
        : isAbbreviated
        ? 3 // 100.001M, 100.001B, 100.001T
        : 0, // >999T
      ...(isAbbreviated && {
        minimumFractionDigits: 3,
        notation: 'compact',
      }),
    };

    return formatNumber(number, format);
  }
};

type Props = {
  value: string;
} & Options;

const Number = ({
  value,
  currency,
  showSign: plusMinus = DEFAULT_SHOW_SIGN,
}: Props): React.ReactElement => (
  <>{formatGnosisNumber(value, { currency, showSign: plusMinus })}</>
);

export default Number;
