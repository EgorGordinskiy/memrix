import { type FC } from 'react';
import classes from './ModeLink.module.scss';
import { Link } from 'react-router-dom';
import { type INavigationItem } from '../../../models/navigation-item.model';

interface ModeLinkProps {
  item: INavigationItem;
}

export const ModeLink: FC<ModeLinkProps> = ({ item }) => {
  return (
    <Link className={classes.modeLink} to={item.path}>
      {item.icon}
      {item.name}
    </Link>
  );
};
