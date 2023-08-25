import { useState, type FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router';
import { BurgerMenu } from '../BurgerMenu';
import { type INavigationItem } from '../../models/navigation-item.model';
import { IoMdCreate } from 'react-icons/io';
import { PiCardsFill } from 'react-icons/pi';

export const Layout: FC = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const navList: INavigationItem[] = [
    { id: 0, name: 'Sets of flashcards', path: '/', icon: <PiCardsFill size={25} /> },
    { id: 1, name: 'Сreate a set of flashcards', path: '/create', icon: <IoMdCreate size={25} /> }
  ];
  const handleClickBurgerButton = () => setIsBurgerMenu(!isBurgerMenu);
  const [name, setName] = useState('Egor');
  return (
    <>
      <Header onClickBurgerButton={handleClickBurgerButton} />
      <BurgerMenu active={isBurgerMenu} setActive={setIsBurgerMenu} items={navList} />
      <main>
        <Outlet context={[name, setName]} />
      </main>
    </>
  );
};
