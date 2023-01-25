import React, { ReactElement, CSSProperties, useMemo } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import Skeleton from '@mui/material/Skeleton';
import styled from '@mui/system/styled';

type IdenticonProps = {
  address: string;
  size?: number;
};

const Identicon = ({ address, size = 40 }: IdenticonProps): ReactElement => {
  const style = useMemo<CSSProperties | null>(() => {
    try {
      const blockie = makeBlockie(address);
      return {
        backgroundImage: `url(${blockie})`,
        width: `${size}px`,
        height: `${size}px`,
      };
    } catch (e) {
      return null;
    }
  }, [address, size]);

  return !style ? (
    <Skeleton variant="circular" width={size} height={size} />
  ) : (
    <IdenticonContainer className="icon" style={style} />
  );
};

const IdenticonContainer = styled('div')({
  width: 'auto',
  height: '100%',
  borderRadius: '50%',
  backgroundSize: 'cover',
});

export default Identicon;
