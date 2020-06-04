import React, { ReactElement } from 'react';
import { default as TabMui } from '@material-ui/core/Tab';
import { default as TabsMui } from '@material-ui/core/Tabs';
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
  variant: 'outlined' | 'contained';
};

const CustomTabs = ({ variantStyle, ...rest }: any): any => {
  const CustomTabsMui = withStyles({
    root: {
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : 'inherit'
    }
  })(TabsMui);

  return <CustomTabsMui {...rest} />;
};

const CustomTab = (props: any): any => {
  const CustomTabMui = withStyles({
    root: {
      fontFamily: theme.fonts.fontFamily
    }
  })(TabMui);

  return <CustomTabMui {...props} />;
};

function Tab({
  onChange,
  items,
  color,
  selectedTab,
  orientation = 'horizontal',
  variant
}: Props) {
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    onChange(newValue);
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
      onChange={handleChange}
      variantStyle={variant}>
      {items.map(item => (
        <CustomTab
          key={item.id}
          label={getLabel(item)}
          value={item.id}
          disabled={item.disabled}
        />
      ))}
    </CustomTabs>
  );
}

export default Tab;
