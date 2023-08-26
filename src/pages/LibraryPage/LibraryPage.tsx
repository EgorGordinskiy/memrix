import { type FC } from 'react';
import classes from './LibraryPage.module.scss';
import { Container } from '../../components/Container';
import { Wrapper } from '../../components/Wrapper';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const LibraryPage: FC = () => {
  const { t } = useTranslation();
  return (
    <section className={classes.libraryPage}>
      <Container maxWidth={1200}>
        <Wrapper direction="column">
          <h2>Your library</h2>
          <div>{t('hello')}</div>
        </Wrapper>
      </Container>
    </section>
  );
};
