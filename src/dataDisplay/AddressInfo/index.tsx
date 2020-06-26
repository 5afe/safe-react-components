import React from 'react';
import styled from 'styled-components';

import Text from '../Text';
import Identicon from '../../utils/Identicon';
import Icon from '../Icon';
// import FixedIcon from '../FixedIcon';

const AddressInfo = styled.div``;

const StyledContainer = styled.div`
  display: flex;
`;

const IdenticonContainer = styled.div`
  margin: 4px 8px 0 0;
`;

const InfoContainer = styled.div`
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;

  span {
    margin-left: 12px; /* icon */
  }
`;
/*  CASE 1: Identicon + Owner + Address + icons  */ 
export default ({ ...args }) => (
  <AddressInfo {...args}>
    <StyledContainer>
      <IdenticonContainer>
        <Identicon address="thisIsAnExample" size="md" />
      </IdenticonContainer>
      <InfoContainer>
        <Text size="lg" color="text">
          Owner #1
        </Text>
        <AddressContainer>
          <Text size="lg" color="text">
            0x69904ff6d6100799344E5C9A2806936318F6ba4f
          </Text>
          <Icon size="sm" type="copy" />
          <Icon size="sm" type="externalLink" />
          </AddressContainer>
          </InfoContainer>
        </StyledContainer>
      </AddressInfo>
    ); 


/* CASE 1: Identicon + Owner + Address + icons 
export default ({ ...args }) => (
  <AddressInfo {...args}>
    <StyledContainer>
      <IdenticonContainer>
        <Identicon address="thisIsAnExample" size="md" />
      </IdenticonContainer>
      <InfoContainer>
        <Text size="lg" color="text">
          Owner #1
        </Text>
        <AddressContainer>
          <Text size="lg" color="text">
            0x69904ff6d6100799344E5C9A2806936318F6ba4f
          </Text>
          <Icon size="sm" type="copy" />
          <Icon size="sm" type="externalLink" />
          </AddressContainer>
          </InfoContainer>
        </StyledContainer>
      </AddressInfo>
    ); 
*/


/* CASE 2: Identicon + Address + icons (one row)
export default ({ ...args }) => (
  <AddressInfo {...args}>
    <StyledContainer>
      <IdenticonContainer>
        <Identicon address="thisIsAnExample" size="md" />
      </IdenticonContainer>
      <InfoContainer>
        <AddressContainer>
          <Text size="lg" color="text">
            0x69904ff6d6100799344E5C9A2806936318F6ba4f
          </Text>
          <Icon size="sm" type="copy" />
          <Icon size="sm" type="externalLink" />
          </AddressContainer>
          </InfoContainer>
        </StyledContainer>
      </AddressInfo>
    );
*/