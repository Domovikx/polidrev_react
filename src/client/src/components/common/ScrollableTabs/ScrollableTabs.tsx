import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Box, Container, Typography, useTheme } from '@material-ui/core';

import { Collection } from '../../../pages/SoftFurniture/SoftFurniture.types';

import { ScrollableTabsProps, TabPanelProps } from './ScrollableTabs.types';
import { useStyles } from './ScrollableTabs.styles';

/**
 * TODO: This Component in progress
 */

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => ({
  'aria-controls': `full-width-tabpanel-${index}`,
  id: `full-width-tab-${index}`,
});

export const ScrollableTabs = (props: ScrollableTabsProps): JSX.Element => {
  const { collections } = props;

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number): void => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container className={classes.wrapper}>
      <Tabs
        value={value}
        onChange={(event, value) => handleChange(value)}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        {collections?.map((item: Collection, index) => (
          <Tab label={item.title} key={index} {...a11yProps(index)} />
        ))}
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {collections?.map((item: Collection, index) => (
          <TabPanel
            dir={theme.direction}
            index={index}
            key={index}
            value={index}
          >
            {item.collection}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Container>
  );
};
