import React from "react";
import styled from "styled-components";

const Card = styled.div`
  font-family: "Averta";
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: left;
  padding: 0 20px;
`;

const Body = styled.div``;

const WidgetWrapper: React.FC = ({ children }) => (
  <Card>
    <Body>{children}</Body>
  </Card>
);

export default WidgetWrapper;
