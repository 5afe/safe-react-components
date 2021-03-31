import React, { ReactElement } from 'react';
import TabMui, { TabProps } from '@material-ui/core/Tab';
import TabsMui, { TabsProps } from '@material-ui/core/Tabs';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import theme from '../../theme';
import { IconType } from '../../dataDisplay/Icon';
import IconText from '../../dataDisplay/IconText';
import Text from '../../dataDisplay/Text';

export type Item = {
  id: string;
  icon?: keyof IconType;
  label: string;
  customContent?: ReactElement;
  disabled?: boolean;
};

type Variant = 'outlined' | 'contained';

export type Props = {
  onChange: (selectedIndex: string) => void;
  items: Array<Item>;
  selectedTab: string;
  variant?: Variant;
  fullWidth?: boolean;
};

const TabWrapper = styled.div<{ variant: Variant }>`
  box-shadow: ${({ variant, theme }) =>
    variant === 'outlined'
      ? 'inset 0 -2px 0' + theme.colors.overlay.color
      : 'none'};
`;

type CustomTabsProps = TabsProps<
  React.ElementType,
  {
    variantStyle: string;
    children: React.ReactNode;
  }
>;

const CustomTabs = ({ variantStyle, ...rest }: CustomTabsProps) => {
  const CustomTabsMui = withStyles({
    root: {
      borderRadius: variantStyle === 'contained' ? '8px 8px 0 0' : 'inherit',

      '& .MuiTabs-indicator': {
        backgroundColor:
          variantStyle === 'outlined' ? theme.colors.primary : 'transparent',
      },
      '& .MuiTab-textColorInherit.Mui-selected p': {
        color: theme.colors.primary,
        fontWeight: '700',
      },
      '& .MuiTabs-root.MuiTabs-vertical p': {
        textAlign: 'left',
      },
    },
  })(TabsMui);

  return <CustomTabsMui {...rest} />;
};

type CustomTabProps = TabProps<
  React.ElementType,
  {
    variantStyle: string;
  }
>;

const CustomTab = ({ variantStyle, ...rest }: CustomTabProps) => {
  const CustomTabMui = withStyles({
    root: {
      fontFamily: theme.fonts.fontFamily,
      letterSpacing: '1px',
      backgroundColor:
        variantStyle === 'contained' ? theme.colors.white : 'inherit',
      border:
        variantStyle === 'contained'
          ? '1px solid' + theme.colors.separator
          : 'inherit',
      '& .MuiTabs-indicator': {
        backgroundColor: variantStyle === 'contained' ? 'none' : 'inherit',
      },
      textTransform: variantStyle === 'contained' ? 'capitalize' : 'uppercase',
    },
  })(TabMui);

  return <CustomTabMui {...rest} />;
};

const Tab = ({
  onChange,
  items,
  selectedTab,
  variant = 'outlined',
  fullWidth,
}: Props): JSX.Element => {
  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    value: string
  ): void => {
    onChange(value);
  };

  const getLabel = (item: Item) => {
    if (item.customContent) {
      return item.customContent;
    }

    if (item.icon) {
      return (
        <IconText
          iconSize="sm"
          margin="md"
          iconType={item.icon}
          textSize="sm"
          color={selectedTab === item.id ? 'primary' : 'text'}
          text={item.label}
        />
      );
    }

    return (
      <Text color="text" size="sm">
        {item.label}{' '}
      </Text>
    );
  };

  return (
    <TabWrapper variant={variant}>
      <CustomTabs
        variant={fullWidth ? 'fullWidth' : 'scrollable'}
        value={selectedTab}
        onChange={handleChange}
        variantStyle={variant}>
        {items.map((item) => (
          <CustomTab
            key={item.id}
            label={getLabel(item)}
            value={item.id}
            disabled={item.disabled}
            variantStyle={variant}
          />
        ))}
      </CustomTabs>
    </TabWrapper>
  );
};

export default Tab;
