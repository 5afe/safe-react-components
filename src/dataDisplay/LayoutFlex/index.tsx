import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 505px;
  font-family: Averta;
`;

const SubNav = styled.div`
  display: flex;
  padding: 16px 0;
  box-sizing: border-box;
  justify-content: flex-end;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  height: 505px;
  border-radius: 8px;
  box-shadow: 1px 2px 10px 0 rgba(212, 212, 211, 0.59);
  background-color: white;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const List = styled.div`
  width: 250px;
  min-width: 250px;
  box-sizing: border-box;
  overflow-y: auto;
  border-right: solid 2px #e8e7e6;
  background-color: white;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
    flex-grow: 0;
    border-bottom: solid 2px #e8e7e6;
    border-right: 0;
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 0.7em !important;
    scroll-behavior: smooth !important;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey !important;
    outline: 1px solid slategrey !important;
    border-radius: 10px !important;
  }
`;

const NavItem = styled.div`
  flex: 1 100%;
  border-bottom: solid 2px #e8e7e6;
  background-color: white;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 0 16px 16px;
  flex-grow: 0;
  font-size: 16px;

  @media (max-width: 450px) {
    border-right: solid 1px #e8e7e6;
    border-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 8px;
    font-size: 13px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 100%;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.7em !important;
    scroll-behavior: smooth !important;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey !important;
    outline: 1px solid slategrey !important;
    border-radius: 10px !important;
  }
`;

const Footer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  box-sizing: border-box;
`;

const LayoutFlex = () => (
  <Wrapper>
    <SubNav>Subnav</SubNav>
    <Main>
      <List>
        <NavItem>Safe details</NavItem>
        <NavItem>Item</NavItem>
        <NavItem>Longeritem</NavItem>
      </List>
      <Body>
        <p>Body</p>

        <Footer>
          <p>Footer</p>
        </Footer>
      </Body>
    </Main>
  </Wrapper>
);

export default LayoutFlex;
