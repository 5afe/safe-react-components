import React from 'react';
import { RequireAtLeastOne } from '../../typings/utilities';

const DEFAULT_SHOW_DECIMALS = true;
const DEFAULT_SHOW_THOUSAND_SEPARATORS = false;

type FormatNumberOptions = RequireAtLeastOne<{
  roundingType?: 'up' | 'down';
  showDecimals?: boolean;
  decimalPlaces?: number;
  showThousandSeparators?: boolean;
  currency?: string;
}>;

/**
 * Custom number formatter that returns a localized string
 *
 * @param {string} value - number to be formatted
 *
 * @param {Object} options - number formatting options
 * @param {string='up','down'} [options.roundingType] - ceiling/floor number
 * @param {boolean} [options.showDecimals=true] - show or remove decimal places
 * @param {number} [options.decimalPlaces] - set number of decimal places
 * @param {boolean} [options.showThousandSeparators=false] - show or hide thousand groupings
 * @param {string} [options.currency] - currency to return
 *
 * @returns {string} - formatted number/currency
 */
export const formatNumber = (
  value: string,
  options: FormatNumberOptions
): string => {
  if (isNaN(+value)) {
    return value;
  }

  const decimalIndex = value.indexOf('.');

  const {
    // None or length of the decimals places in input
    decimalPlaces = decimalIndex === -1 ? 0 : value.length - decimalIndex - 1,
    roundingType,
    showDecimals = DEFAULT_SHOW_DECIMALS,
    showThousandSeparators = DEFAULT_SHOW_THOUSAND_SEPARATORS,
    currency,
  } = options;

  const maximumFractionDigits =
    showDecimals === false || decimalPlaces === 0 || roundingType
      ? 0
      : decimalPlaces;

  const number = roundingType
    ? Math[roundingType === 'up' ? 'ceil' : 'floor'](+value)
    : +value;

  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits,
    useGrouping: showThousandSeparators,
    ...(currency && { style: 'currency', currency }),
  }).format(number);
};

type Props = {
  value: string;
} & FormatNumberOptions;

const Number = ({
  value,
  showDecimals = DEFAULT_SHOW_DECIMALS,
  showThousandSeparators = DEFAULT_SHOW_THOUSAND_SEPARATORS,
  ...rest
}: Props): React.ReactElement => (
  <>{formatNumber(value, { showDecimals, showThousandSeparators, ...rest })}</>
);

export default Number;
