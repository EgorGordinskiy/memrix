import { useState, type FC } from 'react';
import { Outlet, useParams } from 'react-router';
import { BurgerMenu } from '../BurgerMenu';
import { type INavigationItem } from '../../models/navigation-item.model';
import { IoMdCreate } from 'react-icons/io';
import { PiCardsFill } from 'react-icons/pi';
import { BiLibrary } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { useGetEducationalBlockByIdQuery } from '../../store/educational-blocks/educational-blocks.api';
import { Link } from 'react-router-dom';

export const LayoutEducationalBlock: FC = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const { t } = useTranslation();
  const navList: INavigationItem[] = [
    // { id: 2, name: t('link_library'), path: '/library', icon: <BiLibrary size={25} /> },
    { id: 0, name: t('link_flashcards'), path: '/', icon: <PiCardsFill size={25} /> },
    { id: 1, name: t('link_create'), path: '/create', icon: <IoMdCreate size={25} /> }
  ];
  const handleClickBurgerButton = () => setIsBurgerMenu(!isBurgerMenu);

  const { id } = useParams();
  const { isSuccess, data } = useGetEducationalBlockByIdQuery(id);

  return (
    <>
      <Header
        onClickBurgerButton={handleClickBurgerButton}
        center={isSuccess && <Link to={`/block/${id || 0}`}>{data.name}</Link>}
      />
      <BurgerMenu active={isBurgerMenu} setActive={setIsBurgerMenu} items={navList} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
