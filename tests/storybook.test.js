import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  test: multiSnapshotWithOptions({
    createNodeMock: (element) => {
      if (element.type === 'div') {
        return document.createElement('div');
      }
    },
  }),
});
