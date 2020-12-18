import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Box, Container, Typography, useTheme } from '@material-ui/core';
import { useStyles } from './ScrollableTabs.styles';

/**
 * TODO: This Component in progress
 */

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

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

const a11yProps = (index: any) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

export const ScrollableTabs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container className={classes.wrapper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="on"
      >
        <Tab label="Item 1" {...a11yProps(0)} />
        <Tab label="Item 2" {...a11yProps(1)} />
        <Tab label="Item 3" {...a11yProps(2)} />
        <Tab label="Item 4" {...a11yProps(3)} />
        <Tab label="Item 5" {...a11yProps(4)} />
        <Tab label="Item 6" {...a11yProps(5)} />
        <Tab label="Item 7" {...a11yProps(6)} />
        <Tab label="Item 8" {...a11yProps(7)} />
        <Tab label="Item 9" {...a11yProps(8)} />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item 1
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item 2
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item 3
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item 4
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          Item 5
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          Item 6
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          Item 7
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          Item 8
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          Item 9
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
};
