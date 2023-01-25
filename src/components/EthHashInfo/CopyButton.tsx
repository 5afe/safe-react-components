import React, {
  ReactElement,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';

import CopyIcon from './CopyIcon';

const CopyButton = ({
  text,
  className,
  children,
  initialToolTipText = 'Copy to clipboard',
  onCopy,
}: {
  text: string;
  className?: string;
  children?: ReactNode;
  initialToolTipText?: string;
  ariaLabel?: string;
  onCopy?: () => void;
}): ReactElement => {
  const [tooltipText, setTooltipText] = useState(initialToolTipText);

  const handleCopy = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(text).then(() => setTooltipText('Copied'));
      onCopy?.();
    },
    [text, onCopy]
  );

  const handleMouseLeave = useCallback(() => {
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
        size="small"
        className={className}>
        {children ?? (
          <SvgIcon
            component={CopyIcon}
            inheritViewBox
            color="border"
            fontSize="small"
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
