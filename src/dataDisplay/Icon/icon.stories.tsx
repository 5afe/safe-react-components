import React from 'react';
import styled from 'styled-components';

import Icon from './index';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'The Icon component'
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
        'add',
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
