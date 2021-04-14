import React from 'react';

import IconText from './index';

export default {
  title: 'Data Display/Icon Text',
  component: IconText,
  parameters: {
    componentSubtitle: 'IconText, It combines both Icon and Text component.',
  },
};

export const Sizes = (): React.ReactElement => {
  return (
    <>
      <IconText
        iconSize="sm"
        margin="xs"
        textSize="sm"
        iconType="add"
        text="Some text"
      />
      <IconText
        iconSize="sm"
        margin="xs"
        textSize="xl"
        iconType="add"
        text="Some text"
      />

      <IconText
        iconSize="md"
        margin="xs"
        textSize="sm"
        iconType="add"
        text="Some text"
      />
      <IconText
        iconSize="md"
        margin="xs"
        textSize="xl"
        iconType="add"
        text="Some text"
      />
    </>
  );
};

export const IconPosition = (): React.ReactElement => {
  return (
    <>
      <IconText
        iconSize="sm"
        margin="xs"
        textSize="sm"
        iconType="add"
        text="Some text"
        iconSide="right"
      />
      <IconText
        iconSize="sm"
        margin="xs"
        textSize="xl"
        iconType="add"
        text="Some text"
        iconSide="right"
      />

      <IconText
        iconSize="md"
        margin="xs"
        textSize="sm"
        iconType="add"
        text="Some text"
        iconSide="right"
      />
      <IconText
        iconSize="md"
        margin="xs"
        textSize="xl"
        iconType="add"
        text="Some text"
        iconSide="right"
      />
    </>
  );
};

export const IconMargin = (): React.ReactElement => {
  return (
    <>
      <IconText
        iconSize="md"
        margin="md"
        textSize="md"
        iconType="add"
        text="Some text"
        iconSide="left"
      />
      <IconText
        iconSize="md"
        margin="md"
        textSize="xl"
        iconType="add"
        text="Some text"
        iconSide="right"
      />
    </>
  );
};
