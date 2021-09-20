import React from 'react';
import { isString } from '../../utils/strings';

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

const MAX_NUMBER = 10e14;
const MAX_NUMBER_SHOWN = 999e12;
const SMALLEST_NUMBER_SHOWN = 10e-6; // 0.00001
const SMALLEST_NUMBER_MINIMUM_FRACTION_DIGITS = 5;

export const formatAmount = (
  value: string | number,
  { currency, showSign = DEFAULT_SHOW_SIGN }: FormatOptions = {}
): string => {
  try {
    const number = isString(value) ? +value : value;

    if (isNaN(number)) {
      throw new Error('The provided amount is not a number.');
    }

    const formatNumber = (
      number: number,
      format: IntlFormatNumberOptions,
      prefix = ''
    ) => {
      const isNegative = Math.sign(number) === -1;

      // Add space after prefix (if displaying sign)
      const shouldDisplayPrefix = prefix && (showSign || isNegative);
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

    const isPositive = Math.sign(number) === 1;

    const isSmallNumber =
      number < SMALLEST_NUMBER_SHOWN && number > -SMALLEST_NUMBER_SHOWN; // <0.00001
    const isMaxNumber =
      (number >= MAX_NUMBER || number <= -MAX_NUMBER) && !isSmallNumber; // >999T

    if (isSmallNumber) {
      // <0.00001
      return formatNumber(
        Math.sign(number) * SMALLEST_NUMBER_SHOWN, // Positive or negative
        { minimumFractionDigits: SMALLEST_NUMBER_MINIMUM_FRACTION_DIGITS },
        '<'
      );
    } else if (isMaxNumber) {
      // >999T
      return formatNumber(
        Math.sign(number) * MAX_NUMBER_SHOWN, // Positive or negative
        { notation: 'compact' },
        isPositive ? '>' : '<'
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
  } catch {
    return isString(value) ? value : value.toString();
  }
};

type Props = {
  value: string;
} & FormatOptions;

const Amount = ({
  value,
  currency,
  showSign = DEFAULT_SHOW_SIGN,
}: Props): React.ReactElement => (
  <>{formatAmount(value, { currency, showSign })}</>
);

export default Amount;
