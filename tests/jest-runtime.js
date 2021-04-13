jest.mock('@material-ui/core/Portal', () => {
  return ({ children }) => children;
});
