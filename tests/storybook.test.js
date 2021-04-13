import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: (element) => {
      if (element.type === 'div') {
        return document.createElement('div');
      }
    },
  }),
});
