import React from 'react';
import styled from 'styled-components';

import FixedIcon from './index';

export default {
  title: 'Data Display/FixedIcon',
  component: FixedIcon,
  parameters: {
    componentSubtitle: 'The Fixed Icon component'
  }
};

export const icons = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const IconBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 2px;
    margin-right: 2px;
    margin-bottom: 2px;
    width: 150px;
    height: 150px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  `;

  return (
    <Wrapper>
      {[
        'arrowSort',
        'connectedRinkeby',
        'connectedWallet',
        'bullit',
        'dropdownArrowSmall',
        'arrowReceived',
        'arrowSent',
        'threeDots',
        'options',
        'plus',
        'chevronRight',
        'chevronLeft',
        'chevronUp',
        'chevronDown',
        'settingsChange',
        'creatingInProgress'        
        
      ].map((type: any, index) => (
        <IconBox key={index}>
          <FixedIcon type={type} />
          {type}
        </IconBox>
      ))}
    </Wrapper>
  );
};

