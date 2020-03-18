import React from 'react';
import styled from 'styled-components';

import Icon from './index';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'The Icon component'
  }
};

export const icons = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  return (
    <Wrapper>
      <Icon size="sm" type="add" />
      <Icon size="sm" type="addressBook" />
      <Icon size="sm" type="addressBookAdd" />
      <Icon size="sm" type="apps" />
      <Icon size="sm" type="alert" />
      <Icon size="sm" type="arrowDown" />
      <Icon size="sm" type="assets" />
      <Icon size="sm" type="awaitingConfirmations" />
      <Icon size="sm" type="camera" />
      <Icon size="sm" type="check" />
      <Icon size="sm" type="circleCheck" />
      <Icon size="sm" type="circleCross" />
      <Icon size="sm" type="code" />
      <Icon size="sm" type="collectibles" />
      <Icon size="sm" type="copy" />
      <Icon size="sm" type="cross" />
      <Icon size="sm" type="currency" />
      <Icon size="sm" type="delete" />
      <Icon size="sm" type="devicePassword" />
      <Icon size="sm" type="edit" />
      <Icon size="sm" type="error" />
    </Wrapper>
  );
};

export const customSize = () => (
  <>
    <Icon size="sm" type="add" />
    <Icon size="md" type="add" />
  </>
);
