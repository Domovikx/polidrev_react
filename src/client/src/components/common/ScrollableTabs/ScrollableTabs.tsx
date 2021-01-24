import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Container } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

import { Collection } from '../../../pages/SoftFurniture/SoftFurniture.types';
import CollectionFurniture from '../CollectionFurniture';
import { Locations } from '../../../constants/locations';

import { ScrollableTabsProps } from './ScrollableTabs.types';
import { useStyles } from './ScrollableTabs.styles';

const a11yProps = (index: number) => ({
  'aria-controls': `full-width-tabpanel-${index}`,
  id: `full-width-tab-${index}`,
});

export const ScrollableTabs = (props: ScrollableTabsProps): JSX.Element => {
  const { collections } = props;
  const classes = useStyles();

  let initValue = 0;
  const { id } = useParams<{ id: string }>();
  if (id) initValue = collections.findIndex((item) => item.collection === id);

  const [value, setValue] = React.useState(initValue);

  const currentCollection: Collection = collections[value];

  const handleChange = (newValue: number): void => {
    setValue(newValue);
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
        classes={{ flexContainer: classes.flexContainer }}
      >
        {collections?.map((item: Collection, index: number) => (
          <Tab
            {...a11yProps(index)}
            component={Link}
            key={index}
            label={item.title}
            to={Locations.SoftFurniture_relative + item.collection}
          />
        ))}
      </Tabs>

      <CollectionFurniture
        collection={currentCollection}
        currentValue={value}
        id={value}
      />
    </Container>
  );
};
