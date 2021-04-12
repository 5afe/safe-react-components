jest.mock('@material-ui/core/Portal', () => {
  return ({ container, disablePortal, children }) => children;
});
