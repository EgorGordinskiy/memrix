import { type FC } from 'react';
import classes from './NavItem.module.scss';
import { type INavigationItem } from '../../models/navigation-item.model';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  navItem: INavigationItem;
}

export const NavItem: FC<NavItemProps> = ({ navItem }) => {
  return (
    <NavLink className={classes.navItem} to={navItem.path}>
      {navItem.icon}
      {navItem.name}
    </NavLink>
  );
};
