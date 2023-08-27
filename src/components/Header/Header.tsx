import { type ReactNode, type FC } from 'react';
import classes from './Header.module.scss';
import { Container } from '../Container';
import { Wrapper } from '../Wrapper';
import { CgMenuLeft } from 'react-icons/cg';
import { IconButton } from '../UI/IconButton';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface HeaderProps {
  onClickBurgerButton: () => void;
  center?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ onClickBurgerButton, center }) => {
  return (
    <header className={classes.header}>
      <Container>
        <Wrapper justify="space-between" align="center">
          <IconButton
            onClick={onClickBurgerButton}
            variant="secondary"
            icon={<CgMenuLeft size={23} />}
          />
          {center}
          <LanguageSwitcher languages={['ru', 'en']} />
        </Wrapper>
      </Container>
    </header>
  );
};
