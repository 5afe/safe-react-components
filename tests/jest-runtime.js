import 'jest-styled-components'; // makes classnames deterministic

jest.mock('@material-ui/core/Portal', () => {
  return ({ children }) => children;
});
