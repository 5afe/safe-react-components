import React from 'react';
import styled from 'styled-components';

import Button from './index';
import { Text } from '../../index';

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
      <Text size="xl" color="white">
        Text
      </Text>
    </Button>

    <Button size="md" color="primary" variant="outlined">
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>

    <Button
      size="md"
      iconType="addressBook"
      color="secondary"
      variant="bordered">
      <Text size="xl" color="secondary">
        Text
      </Text>
    </Button>
  </>
);

export const DisabledButton = (): React.ReactElement => (
  <>
    <Button size="md" color="primary" variant="contained" disabled>
      <Text size="xl" color="white">
        Text
      </Text>
    </Button>

    <Button size="md" color="primary" variant="outlined" disabled>
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>

    <Button
      size="md"
      iconType="addressBook"
      color="primary"
      variant="bordered"
      disabled>
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>
  </>
);

export const Sizes = (): React.ReactElement => (
  <Wrapper>
    <Button size="md" color="primary" variant="contained">
      <Text size="xl" color="white">
        Text
      </Text>
    </Button>
    <Button size="lg" color="primary" variant="contained">
      <Text size="xl" color="white">
        Text
      </Text>
    </Button>
    <Button size="lg" color="secondary" variant="bordered">
      <Text size="xl" color="secondary">
        Text
      </Text>
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
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>
    <Button size="lg" iconType="addressBook" color="error" variant="outlined">
      <Text size="xl" color="error">
        Text
      </Text>
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="primary"
      variant="contained">
      <Text size="xl" color="white">
        Text
      </Text>
    </Button>
    <Button
      size="lg"
      iconType="addressBook"
      color="secondary"
      variant="bordered">
      <Text size="xl" color="secondary">
        Text
      </Text>
    </Button>
  </>
);

export const withIconSize = (): React.ReactElement => (
  <>
    <Button
      variant="bordered"
      size="lg"
      iconType="addressBook"
      color="primary"
      onClick={() => alert('click')}>
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>
    <Button
      variant="bordered"
      iconType="addressBook"
      iconSize="sm"
      size="lg"
      color="primary"
      onClick={() => alert('click')}>
      <Text size="xl" color="primary">
        Text
      </Text>
    </Button>
  </>
);
