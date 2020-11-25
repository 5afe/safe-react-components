import React from 'react';
import styled from 'styled-components';

import Link from './index';
import { Icon } from '../../';

export default {
  title: 'inputs/Link',
  component: Link,
  parameters: {
    componentSubtitle: 'Link component.',
  },
};

export const Default = (): React.ReactElement => (
  <Link href="#">Some text</Link>
);

export const withColor = (): React.ReactElement => (
  <Link href="#" color="error">
    Some text
  </Link>
);

export const WithCustomSize = (): React.ReactElement => (
  <Link href="#" size="lg">
    Some text
  </Link>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WithCustomChild = (): React.ReactElement => (
  <Link href="#" size="lg">
    <Wrapper>
      <Icon type="alert" size="md" />
      Some text
    </Wrapper>
  </Link>
);
