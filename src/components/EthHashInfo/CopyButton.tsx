import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

import usePalette from '../../hooks/usePalette';
import { CopyIcon } from '../Icons';

type CopyButtonProps = {
  text: string;
  className?: string;
  children?: React.ReactNode;
  initialToolTipText?: string;
  ariaLabel?: string;
  onCopy?: () => void;
};

const CopyButton = ({
  text,
  className,
  children,
  initialToolTipText = 'Copy to clipboard',
  onCopy,
}: CopyButtonProps): React.ReactElement => {
  const palette = usePalette();
  const [tooltipText, setTooltipText] = React.useState(initialToolTipText);

  const handleCopy = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(text).then(() => setTooltipText('Copied'));
      onCopy?.();
    },
    [text, onCopy]
  );

  const handleMouseLeave = React.useCallback(() => {
    setTimeout(() => setTooltipText(initialToolTipText), 500);
  }, [initialToolTipText]);

  return (
    <Tooltip
      title={tooltipText}
      placement="top"
      onMouseLeave={handleMouseLeave}>
      <IconButton
        aria-label={initialToolTipText}
        onClick={handleCopy}
        className={className}
        size="small">
        {children ?? (
          <SvgIcon
            component={CopyIcon}
            inheritViewBox
            fontSize="inherit"
            sx={{
              width: '1rem',
              height: '1rem',
              '& path': {
                fill: palette.border.main,
              },
            }}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
