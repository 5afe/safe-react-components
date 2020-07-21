import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  /* border: 1px solid #e8e7e6; 
  border-radius: 5px;
  margin: 20px;
  padding: 0px 20px;*/
  min-width: 400px;
`;

type Props = {
  children: React.ReactNode;
};

/**
 * Use `Section` to highlight/group content.
 */
const Section = ({ children }: Props): React.ReactElement => (
  <StyledSection>{children}</StyledSection>
);

export default Section;
