import * as React from 'react';

import CopyButton from './CopyButton';

type CopyAddressButtonProps = {
  prefix?: string;
  address: string;
  copyPrefix?: boolean;
};

const CopyAddressButton = ({
  
  address
  
}: CopyAddressButtonProps): React.ReactElement => {
  const addressText = address;

  return <CopyButton text={addressText} />;
};

export default CopyAddressButton;
