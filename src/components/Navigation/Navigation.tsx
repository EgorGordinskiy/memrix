import { type FC } from 'react';
import classes from './Navigation.module.scss';
import { Wrapper } from '../Wrapper';
import { type INavigationItem } from '../../models/navigation-item.model';

interface NavigationProps {
  navList: INavigationItem[];
}

export const Navigation: FC<NavigationProps> = ({ navList }) => {
  return (
    <nav className={classes.navigation}>
      <Wrapper gap={10}>
        {navList.map((navItem) => (
          <li key={navItem.id}>{navItem.name}</li>
        ))}
      </Wrapper>
    </nav>
  );
};
