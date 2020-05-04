import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.separator};
  margin: 16px 0;
`;

export default ({ ...args }) => <Divider {...args} />;
