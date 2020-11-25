import React from 'react';
import styled from 'styled-components';

import Button from './index';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button component with several variants',
  },
};

const Wrapper = styled.div`
  > * {
    margin-right: 5px;
  }
`;

export const SimpleButton = (): React.ReactElement => (
  <>
    <Button size="md" color="primary" variant="contained">
      text
    </Button>

    <Button size="md" color="primary" variant="outlined">
      text
    </Button>

    <Button size="md" iconType="addressBook" color="primary" variant="bordered">
      text
    </Button>
  </>
);

export const DisabledButton = (): React.ReactElement => (
  <>
    <Button size="md" color="primary" variant="contained" disabled>
      text
    </Button>

    <Button size="md" color="primary" variant="outlined" disabled>
      text
    </Button>

    <Button
      size="md"
      iconType="addressBook"
      color="primary"
      variant="bordered"
      disabled>
      text
    </Button>
  </>
);

export const Sizes = (): React.ReactElement => (
  <Wrapper>
    <Button size="md" color="primary" variant="contained">
      text
    </Button>
    <Button size="lg" color="primary" variant="contained">
      some text
    </Button>
  </Wrapper>
);

export const withIcon = (): React.ReactElement => (
  <>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      onClick={() => alert('click')}>
      text
    </Button>
    <Button size="lg" iconType="addressBook" color="error" variant="outlined">
      text
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      variant="contained">
      text
    </Button>
  </>
);
