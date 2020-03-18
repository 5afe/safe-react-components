import add from './images/add';
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

import { Theme } from '../../theme';

const icons = {
  add,
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
  error
};

type IconType = typeof icons;

type Props = {
  type: keyof IconType;
  size: keyof Theme['icons']['size'];
};

/**
 * The `Icon` renders an icon, it can be one already defined specified by
 * the type props or custom one using the customUrl.
 */
function Icon({ type, size }: Props) {
  return icons[type][size];
}

export default Icon;
