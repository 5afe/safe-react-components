import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  border-top: 2px solid #e8e7e6;
  margin: 20px 0;
  width: 100%;
`;

type Props = {
  children: any;
};

/**
 * Use `Divider` to separate content.
 */
const Divider = ({ children }: Props) => (
  <StyledDivider>{children}</StyledDivider>
);

export default Divider;
