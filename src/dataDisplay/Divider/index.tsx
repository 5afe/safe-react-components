import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  border-top: 2px solid #e8e7e6;
  margin: 16px 0;
  width: 100%;
`;

/**
 * Use `Divider` to separate content.
 */
const Divider = () => (
  <StyledDivider />
);

export default Divider;
