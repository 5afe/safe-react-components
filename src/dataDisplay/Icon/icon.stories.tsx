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
    flex-wrap: wrap;
  `;

  const listIconSize = 'md';
  
  return (
    <Wrapper>
      <Icon size={listIconSize} type="add" />
      <Icon size={listIconSize} type="addressBook" />
      <Icon size={listIconSize} type="addressBookAdd" />
      <Icon size={listIconSize} type="apps" />
      <Icon size={listIconSize} type="alert" />
      <Icon size={listIconSize} type="arrowDown" />
      <Icon size={listIconSize} type="assets" />
      <Icon size={listIconSize} type="awaitingConfirmations" />
      <Icon size={listIconSize} type="camera" />
      <Icon size={listIconSize} type="check" />
      <Icon size={listIconSize} type="circleCheck" />
      <Icon size={listIconSize} type="circleCross" />
      <Icon size={listIconSize} type="code" />
      <Icon size={listIconSize} type="collectibles" />
      <Icon size={listIconSize} type="copy" />
      <Icon size={listIconSize} type="cross" />
      <Icon size={listIconSize} type="currency" />
      <Icon size={listIconSize} type="delete" />
      <Icon size={listIconSize} type="devicePassword" />
      <Icon size={listIconSize} type="edit" />
      <Icon size={listIconSize} type="error" />
      <Icon size={listIconSize} type="eth" />
      <Icon size={listIconSize} type="externalLink" />
      <Icon size={listIconSize} type="eye" />
      <Icon size={listIconSize} type="eyeOff" />
      <Icon size={listIconSize} type="filledCross" />
      <Icon size={listIconSize} type="fingerPrint" />
      <Icon size={listIconSize} type="getInTouch" />
      <Icon size={listIconSize} type="info" />
      <Icon size={listIconSize} type="licenses" />
      <Icon size={listIconSize} type="loadSafe" />
      <Icon size={listIconSize} type="locked" />
      <Icon size={listIconSize} type="mobileConfirm" />
      <Icon size={listIconSize} type="noInternet" />
    </Wrapper>
  );
};

export const customSize = () => (
  <>
    <Icon size="sm" type="add" />
    <Icon size="md" type="add" />
  </>
);
