import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 1.5em;
  min-height: 300px;
  width: 100%;
  background: LightGray;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 50px auto 60px;
  grid-gap: 10px;
  grid-template-areas:
    'title title'
    'navbar body'
    'footer footer';

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr;
    grid-template-areas:
      'title'
      'navbar'
      'body'
      'footer';
  }
`;

const Title = styled.div`
  background: rgb(137, 180, 206);
  grid-area: title;
`;
const Navbar = styled.div`
  background: rgb(139, 131, 127);
  grid-area: navbar;
`;
const Body = styled.div`
  background: rgb(193, 197, 197);
  grid-area: body;
`;
const Footer = styled.div`
  background: rgb(158, 158, 158);
  grid-area: footer;
`;

const Layout = (): React.ReactElement => (
  <Container>
    <Title>Title</Title>
    <Navbar>Navbar</Navbar>
    <Body>Body</Body>
    <Footer>footer</Footer>
  </Container>
);

export default Layout;
