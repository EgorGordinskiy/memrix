import { useState, type FC } from 'react';
import classes from './TestingPage.module.scss';
import { Container } from '../../components/Container';
import { RadioButton } from '../../components/RadioButton';
import { MyButton } from '../../components/UI/MyButton';

export const TestingPage: FC = () => {
  const [selectedMode, setSelectedMode] = useState('');
  const handleChangeMode = (mode: string) => {
    setSelectedMode(mode);
  };
  return (
    <section className={classes.testingPage}>
      <Container maxWidth={1000}>
        <div className={classes.start}>
          <h3>Добро пожаловать в режим {`"Тестирования"`}</h3>
          <RadioButton onChange={handleChangeMode} options={['Письмо', 'Тестирование']} />
          <MyButton>Начать</MyButton>
        </div>
      </Container>
    </section>
  );
};
