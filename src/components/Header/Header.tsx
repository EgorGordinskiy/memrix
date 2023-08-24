import { type FC } from 'react';
import classes from './Header.module.scss';
import { Container } from '../Container';
import { Wrapper } from '../Wrapper';
import { Logo } from '../Logo';
import { AiFillHeart, AiOutlineHeart, AiOutlinePlus } from 'react-icons/ai';
import { CgMenuLeft } from 'react-icons/cg';
import { IconButton } from '../UI/IconButton';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';

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
              icon={<CgMenuLeft size={25} />}
            />
            <Logo />
          </Wrapper>
          <SearchBar />
          <Link to="/">
            <IconButton variant="secondary" icon={<AiOutlineHeart size={25} />} />
          </Link>
        </Wrapper>
      </Container>
    </header>
  );
};
