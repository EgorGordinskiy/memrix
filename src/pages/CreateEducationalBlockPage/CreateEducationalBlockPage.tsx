import { type FC } from 'react';
import classes from './CreateEducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { CreateEducationalBlockForm } from '../../components/CreateEducationalBlockForm';

export const CreateEducationalBlockPage: FC = () => {
  return (
    <section className={classes.createEducationalBlockPage}>
      <Container maxWidth={1000}>
        <CreateEducationalBlockForm />
      </Container>
    </section>
  );
};
