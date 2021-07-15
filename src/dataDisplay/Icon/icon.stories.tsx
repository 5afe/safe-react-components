import React from 'react';
import styled from 'styled-components';

import { Icon, IconTypes } from './index';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    componentSubtitle:
      'Icon component, you can select one of the set of icons we already have configured.',
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
    font-family: ${({ theme }) => theme.fonts.fontFamily};
    font-size: 14px;
  `;

  const icons: IconTypes[] = [
    'add',
    'addressBook',
    'addressBookAdd',
    'alert',
    'allowances',
    'apps',
    'arrowUp',
    'arrowRight',
    'arrowDown',
    'arrowLeft',
    'assets',
    'awaitingConfirmations',
    'camera',
    'chain',
    'check',
    'circleCheck',
    'circleCross',
    'circleDropdown',
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
    'exportImg',
    'externalLink',
    'eye',
    'eyeOff',
    'filledCross',
    'fingerPrint',
    'fuelIndicator',
    'getInTouch',
    'home',
    'importImg',
    'info',
    'knowledge',
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
    'rocket',
    'scan',
    'safe',
    'search',
    'sendAgain',
    'sent',
    'serverError',
    'settings',
    'settingsChange',
    'settingsTool',
    'share',
    'termsOfUse',
    'transactionsInactive',
    'unlocked',
    'userEdit',
    'wallet',
  ];

  return (
    <Wrapper>
      {icons.map((type, index) => (
        <IconBox key={index}>
          <Icon size="md" type={type} />
          {type}
        </IconBox>
      ))}
    </Wrapper>
  );
};

export const CustomSize = (): React.ReactElement => (
  <>
    <Icon size="sm" type="add" />
    <Icon size="md" type="add" />
  </>
);

export const CustomColor = (): React.ReactElement => (
  <>
    <Icon size="md" type="add" color="primary" />
    <Icon size="md" type="add" color="error" />
    <Icon size="md" type="add" color="rinkeby" />
  </>
);

export const WithTooltip = (): React.ReactElement => (
  <Icon size="md" type="add" color="primary" tooltip="some text" />
);
