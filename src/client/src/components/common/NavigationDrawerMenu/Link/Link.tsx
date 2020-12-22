import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Locations } from '../../../../constants/locations';

import { LinkProps } from './Link.types';

export const Link = ({ title, location, icon }: LinkProps): JSX.Element => (
  <ListItem button to={location || Locations.Index} component={NavLink}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
);
