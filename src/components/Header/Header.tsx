import { type FC } from 'react';
import classes from './Header.module.scss';
import { Container } from '../Container';
import { Wrapper } from '../Wrapper';
import { Logo } from '../Logo';
import { AiFillHeart, AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai';
import { CgMenuLeft } from 'react-icons/cg';
import { IconButton } from '../UI/IconButton';
import { Link, useOutletContext } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import { IoMdCreate } from 'react-icons/io';
import { BiLibrary } from 'react-icons/bi';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface HeaderProps {
  onClickBurgerButton: () => void;
}

export const Header: FC<HeaderProps> = ({ onClickBurgerButton }) => {
  return (
    <header className={classes.header}>
      <Container>
        <Wrapper justify="space-between" align="center">
          <Wrapper align="center" gap={20}>
            <IconButton
              onClick={onClickBurgerButton}
              variant="secondary"
              icon={<CgMenuLeft size={23} />}
            />
            <Logo />
          </Wrapper>
          <Wrapper align="center" gap={10}>
            {/* <Link to="/library">
              <IconButton variant="secondary" icon={<BiLibrary size={23} />} />
            </Link> */}
            <LanguageSwitcher languages={['ru', 'en']} />
          </Wrapper>
        </Wrapper>
      </Container>
    </header>
  );
};
