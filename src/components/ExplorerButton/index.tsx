import React, { ReactElement } from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

import usePalette from '../../hooks/usePalette';

import LinkIcon from './LinkIcon';

export type ExplorerButtonProps = {
  title: string;
  href: string;
};

const ExplorerButton = ({
  title,
  href,
}: ExplorerButtonProps): ReactElement | null => {
  const palette = usePalette();

  if (!href) return null;

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        size="small">
        <SvgIcon
          component={LinkIcon}
          inheritViewBox
          sx={{
            width: '1rem',
            height: '1rem',
            '& path': {
              fill: palette.border.main,
            },
          }}
        />
      </IconButton>
    </Tooltip>
  );
};

export default ExplorerButton;
