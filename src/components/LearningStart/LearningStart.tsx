import { type FC, type MouseEvent } from 'react';
import classes from './LearningStart.module.scss';
import { MyButton } from '../UI/MyButton';
import { TfiThemifyFavicon } from 'react-icons/tfi';

interface LearningStartProps {
  onClickStart: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickExit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const LearningStart: FC<LearningStartProps> = ({ onClickStart, onClickExit }) => {
  return (
    <form className={classes.form}>
      <h3 className={classes.title}>
        Добро пожаловать в режим изучения слов! <TfiThemifyFavicon size={30} />
      </h3>
      <div className={classes.description}>
        <p>Данный режим включает два этапа:</p>
        <p className={classes.info}>
          Переписывание слова: пишите слова так, как видите их, для зрительного запоминания.
        </p>
        <p className={classes.info}>
          Восстановление слова: заполняйте пропущенные буквы в словах, тренируя память и орфографию.
        </p>
      </div>
      <div className={classes.control}>
        <MyButton onClick={(e) => onClickExit(e)}>Выход</MyButton>
        <MyButton type="submit" onClick={(e) => onClickStart(e)}>
          Начать
        </MyButton>
      </div>
    </form>
  );
};
