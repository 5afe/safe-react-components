import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
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
        variantStyle === 'contained' ? theme.colors.white : theme.colors.white,
      borderRadius: variantStyle === 'contained' ? '8px 8px 0 0' : 'inherit',

      '& .MuiTabs-indicator': {
        backgroundColor: variantStyle === 'outlined' ? '#008C73' : 'transparent'
      },
      '& .MuiTab-wrapper svg': {
        marginTop: '4px'
      },
      '& .MuiTab-root.Mui-selected': {
        backgroundColor:
          variantStyle === 'contained'
            ? theme.colors.inputField
            : theme.colors.white
      },
      '& .MuiTab-textColorInherit.Mui-selected p': {
        color: '#008C73',
        fontWeight: '700'
      },
      '& .MuiTabs-root.MuiTabs-vertical p': {
        textAlign: 'left'
      }
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
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : 'inherit',
      border:
        variantStyle === 'contained'
          ? '1px solid rgb(232, 231, 230)'
          : 'inherit',
      '& .MuiTabs-indicator': {
        backgroundColor: variantStyle === 'contained' ? 'none' : 'inherit'
      },
      textTransform: variantStyle === 'contained' ? 'capitalize' : 'uppercase'
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
      // if (selectedTab) {
      //   color="primary"
      // } else {
      //   color="text"
      // }
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
    <Box
      width="100%"
      border={1}
      borderColor="grey.300"
      borderTop={0}
      borderRight={0}
      borderLeft={0}>
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
    </Box>
  );
}

export default Tab;
