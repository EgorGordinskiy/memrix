import { type FC } from 'react';
import classes from './CreateEducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { MyButton } from '../../components/UI/MyButton';

export const CreateEducationalBlockPage: FC = () => {
  return (
    <section className={classes.createEducationalBlockPage}>
      <div className={classes.tools}>
        <Container maxWidth={1200}>
          <MyButton variant="secondary">create</MyButton>
        </Container>
      </div>
    </section>
  );
};
