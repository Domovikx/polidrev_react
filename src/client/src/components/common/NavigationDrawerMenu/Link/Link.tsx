import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { LinkProps } from './Link.types';
import { Locations } from '../../../../constants/locations';
import { NavLink } from 'react-router-dom';

export const Link = ({ tittle, location, icon }: LinkProps) => (
  <ListItem button to={location || Locations.Index} component={NavLink}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={tittle} />
  </ListItem>
);
