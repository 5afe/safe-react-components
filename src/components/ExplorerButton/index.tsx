import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { LinkIcon } from '../Icons';
import Icon from '../Icons/Icon';

export type ExplorerButtonProps = {
  title: string;
  href: string;
};

const stopPropagation = (e: React.SyntheticEvent) => e.stopPropagation();

const ExplorerButton = ({
  title,
  href,
}: ExplorerButtonProps): React.ReactElement | null => {
  if (!href) return null;

  return (
    <Tooltip title={title} placement="top">
      <IconButton
        key="explorer"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopPropagation}
        size="small">
        <Icon component={LinkIcon} />
      </IconButton>
    </Tooltip>
  );
};

export default ExplorerButton;
