import { formatAmount } from '.';

describe('formatAmount', () => {
  const NumberFormat = Intl.NumberFormat;
  const numberFormatSpy = jest.spyOn(Intl, 'NumberFormat');

  const setLocale = (locale: string) =>
    numberFormatSpy.mockImplementation(
      (_, options) => new NumberFormat(locale, options)
    );

  beforeEach(() => {
    // Prevent tests failing on non-English environments
    setLocale('en-GB');
  });

  it('cuts off after the 5th decimal, no matter how many decimals there are', () => {
    expect(formatAmount('0.123456')).toBe('0.12346');
    expect(formatAmount(0.123456)).toBe('0.12346');
  });

  it('remove trailing zeroes', () => {
    expect(formatAmount('0.10000')).toBe('0.1');
    expect(formatAmount(0.1)).toBe('0.1');
  });
  it('uses the 5 decimals up until 999.99999', () => {
    expect(formatAmount('999.99999')).toBe('999.99999');
    expect(formatAmount(999.99999)).toBe('999.99999');
  });

  it('uses 4 decimals from 1,000.0001 until 9,999.9999 ', () => {
    expect(formatAmount('1000.11111')).toBe('1,000.1111');
    expect(formatAmount(1000.11111)).toBe('1,000.1111');
    expect(formatAmount('9999.99991')).toBe('9,999.9999');
    expect(formatAmount(9999.99991)).toBe('9,999.9999');
  });

  it('uses 3 decimals from 10,000.001 until 99,999.999', () => {
    expect(formatAmount('10000.1111')).toBe('10,000.111');
    expect(formatAmount(10000.1111)).toBe('10,000.111');
    expect(formatAmount('99999.9991')).toBe('99,999.999');
    expect(formatAmount(99999.9991)).toBe('99,999.999');
  });

  it('uses 2 decimals from 100,000.01 until 999,999.99', () => {
    expect(formatAmount('100000.111')).toBe('100,000.11');
    expect(formatAmount(100000.111)).toBe('100,000.11');
    expect(formatAmount('999999.991')).toBe('999,999.99');
    expect(formatAmount(999999.991)).toBe('999,999.99');
  });

  it('uses 1 decimal from from 1,000,000.1 until 9,999,999.9', () => {
    expect(formatAmount('1000000.11')).toBe('1,000,000.1');
    expect(formatAmount(1000000.11)).toBe('1,000,000.1');
    expect(formatAmount('9999999.91')).toBe('9,999,999.9');
    expect(formatAmount(9999999.91)).toBe('9,999,999.9');
  });

  it('removes decimals from 10,000,000 No Decimals until 99,999,999', () => {
    expect(formatAmount('10000000.1')).toBe('10,000,000');
    expect(formatAmount(10000000.1)).toBe('10,000,000');
    expect(formatAmount('99999999.1')).toBe('99,999,999');
    expect(formatAmount(99999999.1)).toBe('99,999,999');
  });

  it('uses 100.001M until 999.999M', () => {
    expect(formatAmount('100001111')).toBe('100.001M');
    expect(formatAmount(100001111)).toBe('100.001M');
    expect(formatAmount('999999111')).toBe('999.999M');
    expect(formatAmount(999999111)).toBe('999.999M');
  });

  it('uses 100.001B until 999.999B', () => {
    expect(formatAmount('100001111111')).toBe('100.001B');
    expect(formatAmount(100001111111)).toBe('100.001B');
    expect(formatAmount('999999111111')).toBe('999.999B');
    expect(formatAmount(999999111111)).toBe('999.999B');
  });

  it('uses 100.001T until 999.999T', () => {
    expect(formatAmount('100001111111111')).toBe('100.001T');
    expect(formatAmount(100001111111111)).toBe('100.001T');
    expect(formatAmount('999999111111111')).toBe('999.999T');
    expect(formatAmount(999999111111111)).toBe('999.999T');
  });

  it('should then be >999T', () => {
    expect(formatAmount('88888888888888888888888888888888888')).toBe('>999T');
    expect(formatAmount(88888888888888888888888888888888888)).toBe('>999T');
  });

  it("should use thousand and decimal separators based on user's locale", () => {
    setLocale('de-DE');

    expect(formatAmount('100000.111')).toBe('100.000,11');
    expect(formatAmount(100000.111)).toBe('100.000,11');
  });

  it('should localize k, M, B, T', () => {
    setLocale('de-DE');

    // Intl.NumberFormat returns a non-breaking space
    expect(formatAmount('100001111')).toBe('100,001\xa0Mio.');
    expect(formatAmount(100001111)).toBe('100,001\xa0Mio.');
  });

  it('should display <0.00001 for amounts small than 0.00001', () => {
    expect(formatAmount('0.000001')).toBe('<0.00001');
    expect(formatAmount(0.000001)).toBe('<0.00001');
  });

  it('should show sign correctly', () => {
    const options = { showSign: true };

    expect(formatAmount('10000000', options)).toBe('+10,000,000');
    expect(formatAmount(10000000, options)).toBe('+10,000,000');
    expect(formatAmount('-10000000', options)).toBe('-10,000,000');
    expect(formatAmount(-10000000, options)).toBe('-10,000,000');

    expect(formatAmount('88888888888888888888888888888888888', options)).toBe(
      '> +999T'
    );
    expect(formatAmount(88888888888888888888888888888888888, options)).toBe(
      '> +999T'
    );
    expect(formatAmount('-88888888888888888888888888888888888', options)).toBe(
      '< -999T'
    );
    expect(formatAmount(-88888888888888888888888888888888888, options)).toBe(
      '< -999T'
    );

    /**
     * When there is a +/- prefix to the amount (e.g. +0.00001 or -0.00001)
     * and the Eucledian distance of the amount is smaller than 0.00001,
     * then use < -0.00001 and < +0.00001
     */
    expect(formatAmount('0.000001', options)).toBe('< +0.00001');
    expect(formatAmount(-0.000001, options)).toBe('< -0.00001');
    expect(formatAmount('-0.000001', options)).toBe('< -0.00001');
    expect(formatAmount(0.000001, options)).toBe('< +0.00001');
  });

  it('should show currency correctly', () => {
    setLocale('de-DE');

    const options = { currency: 'EUR' };

    expect(formatAmount('99.99', options)).toBe('99,99\xa0€');
    expect(formatAmount(99.99, options)).toBe('99,99\xa0€');
  });

  it('handles unsafe integers', () => {
    expect(formatAmount(Number.MAX_SAFE_INTEGER + 1)).toBe('>999T');
    expect(formatAmount(Number.MIN_SAFE_INTEGER - 1)).toBe('< -999T');
  });
});
