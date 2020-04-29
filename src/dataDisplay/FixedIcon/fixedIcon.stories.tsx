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

    padding: 5px;
    width: 140px;
    height: 140px;
    border: 1px solid ${({ theme }) => theme.colors.background};
    font-family: 'Averta', sans-serif;
    font-size: 14px;
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
        'creatingInProgress',
        'notOwner'

        
      ].map((type: any, index) => (
        <IconBox key={index}>
          <FixedIcon type={type} />
          {type}
        </IconBox>
      ))}
    </Wrapper>
  );
};

