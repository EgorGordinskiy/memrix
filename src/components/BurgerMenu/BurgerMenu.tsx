/* eslint-disable react/jsx-no-target-blank */
import { type FC } from 'react';

import classes from './BurgerMenu.module.scss';
import { type INavigationItem } from '../../models/navigation-item.model';
import { NavItem } from '../NavItem';
import { AiFillCloseCircle, AiFillGithub, AiOutlineCloseCircle } from 'react-icons/ai';

interface BurgerMenuProps {
  items: INavigationItem[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ items, active, setActive }) => {
  const handlerClick = () => setActive(false);
  return (
    <div
      className={active ? [classes.burgerMenu, classes.active].join(' ') : classes.burgerMenu}
      onClick={() => setActive(false)}>
      <div className={classes.blur}></div>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={handlerClick}>
              <NavItem navItem={item} />
            </li>
          ))}
        </ul>
        <div className={classes.links}>
          <span>You are super!</span>
          <a href="https://github.com/Eofre" target="_blank">
            <AiFillGithub size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};
