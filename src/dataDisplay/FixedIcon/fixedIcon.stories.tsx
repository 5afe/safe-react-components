import React from 'react';
import styled from 'styled-components';

import FixedIcon, { IconTypes } from './index';

export default {
  title: 'Data Display/FixedIcon',
  component: FixedIcon,
  parameters: {
    componentSubtitle: `Components that renders an icon customized for Safe Multisig app, this icon is not 
     customizable by props. If you need generic purposes Icons, try Icon component.`,
  },
};

export const Icons = (): React.ReactElement => {
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

  const icons: IconTypes[] = [
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
    'notOwner',
    'notConnected',
  ];

  return (
    <Wrapper>
      {icons.map((type, index) => (
        <IconBox key={index}>
          <FixedIcon type={type} />
          {type}
        </IconBox>
      ))}
    </Wrapper>
  );
};
