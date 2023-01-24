import React, { ReactElement } from 'react';
import { IconButton, Tooltip, SvgIcon } from '@mui/material';

type ExplorerButtonProps = {
  title: string;
  href: string;
};

const ExplorerButton = ({
  title,
  href,
}: ExplorerButtonProps): ReactElement | null => {
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
          color="primary"
          sx={{
            '& path': {
              fill: ({ palette }) => palette.border.main,
            },
          }}
          fontSize="small"
        />
      </IconButton>
    </Tooltip>
  );
};

export default ExplorerButton;
