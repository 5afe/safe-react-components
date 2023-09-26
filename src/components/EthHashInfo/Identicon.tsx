import * as React from 'react';
import { blo } from 'blo';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

type IdenticonProps = {
  address: string;
  size?: number;
};

const Identicon = ({
  address,
  size = 40,
}: IdenticonProps): React.ReactElement => {
  const style = React.useMemo<React.CSSProperties | null>(() => {
    try {
      const icon = blo(address as `0x${string}`);
      return {
        backgroundImage: `url(${icon})`,
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
