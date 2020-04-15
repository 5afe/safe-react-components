import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 8px 0;
  padding: 16px 0;
  box-sizing: border-box;
  max-height: 54px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

type Props = {
  children: any;
};

const Menu = ({ children }: Props) => <Wrapper>{children}</Wrapper>;

export default Menu;
