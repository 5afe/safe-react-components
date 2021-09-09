import React from 'react';

// https://github.com/gnosis/safe/wiki/How-to-format-amounts

type FormatOptions = {
  currency?: string;
  showSign?: boolean;
};

type IntlFormatNumberOptions = Intl.NumberFormatOptions & {
  notation?: 'compact'; // M, B, T
  signDisplay?: 'always' | 'auto'; // +/-
};

const DEFAULT_SHOW_SIGN = false;
const BIGGEST_NUMBER = 10e14;
const SMALLEST_NUMBER = 10e-6;
const SMALLEST_NUMBER_MINIMUM_FRACTION_DIGITS = 5;
export const formatGnosisNumber = (
  value: string,
  { currency, showSign = DEFAULT_SHOW_SIGN }: FormatOptions = {}
): string => {
  const number = +value;

  if (isNaN(number)) {
    return value;
  }

  const isSmallNumber = number < SMALLEST_NUMBER && number > -SMALLEST_NUMBER; // <0.00001
  const isMaxNumber =
    (number >= BIGGEST_NUMBER || number <= -BIGGEST_NUMBER) && !isSmallNumber; // >999T
  const isPositive = number > 0;

  const formatNumber = (
    number: number,
    format: IntlFormatNumberOptions,
    prefix = ''
  ) => {
    // Add space after prefix (if displaying sign)
    const shouldDisplayPrefix = prefix && showSign;
    if (shouldDisplayPrefix) {
      prefix = `${prefix} `;
    }

    const formattedNumber = new Intl.NumberFormat([], {
      signDisplay: showSign ? 'always' : 'auto', // Add positive symbol
      ...(currency && {
        currency,
        style: 'currency',
      }),
      ...format,
    }).format(number);

    return `${prefix}${formattedNumber}`;
  };

  if (isSmallNumber) {
    // <0.00001
    return formatNumber(
      isPositive ? SMALLEST_NUMBER : -SMALLEST_NUMBER,
      { minimumFractionDigits: SMALLEST_NUMBER_MINIMUM_FRACTION_DIGITS },
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
    const format: IntlFormatNumberOptions = {
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
} & FormatOptions;

const Number = ({
  value,
  currency,
  showSign = DEFAULT_SHOW_SIGN,
}: Props): React.ReactElement => (
  <>{formatGnosisNumber(value, { currency, showSign })}</>
);

export default Number;
