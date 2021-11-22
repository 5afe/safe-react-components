import 'jest-styled-components'; // makes classnames deterministic

jest.mock('@material-ui/core/Portal', () => {
  return ({ children }) => children;
});

// to avoid failing tests in some environments
const NumberFormat = Intl.NumberFormat;
const englishTestLocale = 'en';

jest
  .spyOn(Intl, 'NumberFormat')
  .mockImplementation(
    (locale, ...rest) => new NumberFormat([englishTestLocale], ...rest)
  );
