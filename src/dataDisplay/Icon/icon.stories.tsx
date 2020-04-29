import React from 'react';
import styled from 'styled-components';

import Icon from './index';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    componentSubtitle:
      'Icon component, you can select one of the set of icons we already have configured.'
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
        'add',
        'allowances',
        'addressBook',
        'addressBookAdd',
        'apps',
        'alert',
        'arrowDown',
        'assets',
        'awaitingConfirmations',
        'camera',
        'check',
        'circleCheck',
        'circleCross',
        'code',
        'collectibles',
        'copy',
        'cross',
        'currency',
        'delete',
        'devicePassword',
        'edit',
        'error',
        'eth',
        'externalLink',
        'eye',
        'eyeOff',
        'filledCross',
        'fingerPrint',
        'getInTouch',
        'info',
        'licenses',
        'loadSafe',
        'locked',
        'mobileConfirm',
        'noInternet',
        'owners',
        'paste',
        'paymentToken',
        'privacyPolicy',
        'qrCode',
        'question',
        'rateApp',
        'received',
        'recover',
        'replaceOwner',
        'requiredConfirmations',
        'restricted',
        'resync',
        'scan',
        'search',
        'sendAgain',
        'sent',
        'settings',
        'settingsChange',
        'share',
        'termsOfUse',
        'transactionsInactive',
        'unlocked',
        'userEdit',
        'wallet'
      ].map((type: any, index) => (
        <IconBox key={index}>
          <Icon size={'md'} type={type} />
          {type}
        </IconBox>
      ))}
    </Wrapper>
  );
};

export const customSize = () => (
  <>
    <Icon size="sm" type="add" />
    <Icon size="md" type="add" />
  </>
);

export const customColor = () => (
  <>
    <Icon size="md" type="add" color="primary" />
    <Icon size="md" type="add" color="error" />
    <Icon size="md" type="add" color="rinkeby" />
  </>
);
