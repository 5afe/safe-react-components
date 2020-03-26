import React from 'react';
import styled from 'styled-components';

import add from './images/add';
import addcolor from './images/addcolor';
import addressBook from './images/addressBook';
import addressBookAdd from './images/addressBookAdd';
import alert from './images/alert';
import apps from './images/apps';
import arrowDown from './images/arrowDown';
import assets from './images/assets';
import awaitingConfirmations from './images/awaitingConfirmations';
import camera from './images/camera';
import check from './images/check';
import circleCheck from './images/circleCheck';
import circleCross from './images/circleCross';
import code from './images/code';
import collectibles from './images/collectibles';
import copy from './images/copy';
import cross from './images/cross';
import currency from './images/currency';
import deleteIcon from './images/delete';
import devicePassword from './images/devicePassword';
import edit from './images/edit';
import error from './images/error';
import eth from './images/eth';
import externalLink from './images/externalLink';
import eye from './images/eye';
import eyeOff from './images/eyeOff';
import filledCross from './images/filledCross';
import fingerPrint from './images/fingerPrint';
import getInTouch from './images/getInTouch';
import info from './images/info';
import licenses from './images/licenses';
import loadSafe from './images/loadSafe';
import locked from './images/locked';
import mobileConfirm from './images/mobileConfirm';
import noInternet from './images/noInternet';
import owners from './images/owners';
import paste from './images/paste';
import paymentToken from './images/paymentToken';
import privacyPolicy from './images/privacyPolicy';
import qrCode from './images/qrCode';
import question from './images/question';
import rateApp from './images/rateApp';
import received from './images/received';
import recover from './images/recover';
import replaceOwner from './images/replaceOwner';
import requiredConfirmations from './images/requiredConfirmations';
import restricted from './images/restricted';
import resync from './images/resync';
import scan from './images/scan';
import search from './images/search';
import sendAgain from './images/sendAgain';
import sent from './images/sent';
import settings from './images/settings';
import settingsChange from './images/settingsChange';
import share from './images/share';
import termsOfUse from './images/termsOfUse';
import transactionsInactive from './images/transactionsInactive';
import unlocked from './images/unlocked';
import userEdit from './images/userEdit';
import wallet from './images/wallet';

import { Theme } from '../../theme';

const StyledIcon = styled.span`
.icon-color {fill:green};
`;

const icons = {
  add,
  addcolor,
  addressBook,
  addressBookAdd,
  apps,
  alert,
  arrowDown,
  assets,
  awaitingConfirmations,
  camera,
  check,
  circleCheck,
  circleCross,
  code,
  collectibles,
  copy,
  cross,
  currency,
  delete: deleteIcon,
  devicePassword,
  edit,
  error,
  eth,
  externalLink,
  eye,
  eyeOff,
  filledCross,
  fingerPrint,
  getInTouch,
  info,
  licenses,
  loadSafe,
  locked,
  mobileConfirm,
  noInternet,
  owners,
  paste,
  paymentToken,
  privacyPolicy,
  qrCode,
  question,
  rateApp,
  received,
  recover,
  replaceOwner,
  requiredConfirmations,
  restricted,
  resync,
  scan,
  search,
  sendAgain,
  sent,
  settings,
  settingsChange,
  share,
  termsOfUse,
  transactionsInactive,
  unlocked,
  userEdit,
  wallet
};

export type IconType = typeof icons;

type Props = {
  type: keyof IconType;
  size: keyof Theme['icons']['size'];
};

/**
 * The `Icon` renders an icon, it can be one already defined specified by
 * the type props or custom one using the customUrl.
 */
function Icon({ type, size }: Props) {
  return <StyledIcon> {icons[type][size]}</StyledIcon>;
  //return icons[type][size];
}

export default Icon;
