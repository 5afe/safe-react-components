import React, { ReactElement } from 'react';
import TabMui, { TabProps } from '@material-ui/core/Tab';
import TabsMui, { TabsProps } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';

import theme, { Theme } from '../../theme';
import { IconType } from '../../dataDisplay/Icon';
import IconText from '../../dataDisplay/IconText';
import Text from '../../dataDisplay/Text';

export type Item = {
  id: string;
  icon?: keyof IconType;
  label: string;
  customLabel?: ReactElement;
  disabled?: boolean;
};

type Props = {
  onChange: (selectedIndex: string) => void;
  color?: keyof Theme['colors'];
  items: Array<Item>;
  selectedTab: string;
  orientation?: 'vertical' | 'horizontal';
  variant?: 'outlined' | 'contained';
};

interface CustomTabsProps extends TabsProps {
  variantStyle: string;
  children: any;
}
const CustomTabs = ({ variantStyle, ...rest }: CustomTabsProps): any => {
  const CustomTabsMui = withStyles({
    root: {
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : 'inherit'
    }
  })(TabsMui);

  return <CustomTabsMui {...rest} />;
};

interface CustomTabProps extends TabProps {
  variantStyle: string;
}
const CustomTab = ({ variantStyle, ...rest }: CustomTabProps): any => {
  const CustomTabMui = withStyles({
    root: {
      fontFamily: theme.fonts.fontFamily,
      backgroundColor: variantStyle === 'contained' ? theme.colors.overlay.color : 'inherit',
      '&$selected': {
        color: '#1890ff',
        backgroundColor: theme.colors.overlay
      }
    }
  })(TabMui);

  return <CustomTabMui {...rest} />;
};

function Tab({
  onChange,
  items,
  color,
  selectedTab,
  orientation = 'horizontal',
  variant = 'outlined'
}: Props) {
  const handleChange = (_event: React.ChangeEvent<{}>, value: any) => {
    onChange(value);
  };

  const getLabel = (item: Item) => {
    if (item.customLabel) {
      return item.customLabel;
    }

    if (item.icon) {
      return (
        <IconText
          iconSize="sm"
          iconType={item!.icon}
          textSize="sm"
          color={color}
          text={item.label}
        />
      );
    }

    return (
      <Text color={color} size="sm">
        {item.label}{' '}
      </Text>
    );
  };

  return (
    <CustomTabs
      orientation={orientation}
      variant="scrollable"
      value={selectedTab}
      onChange={handleChange as any}
      variantStyle={variant}>
      {items.map(item => (
        <CustomTab
          key={item.id}
          label={getLabel(item)}
          value={item.id}
          disabled={item.disabled}
          variantStyle={variant}
        />
      ))}
    </CustomTabs>
  );
}

export default Tab;
