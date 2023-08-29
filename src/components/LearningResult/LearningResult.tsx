import { type FC, type MouseEvent } from 'react';
import classes from './LearningResult.module.scss';
import { type IWord } from '../../models/word.model';
import { MyButton } from '../UI/MyButton';
import { WordList } from '../WordList';
import { SiHappycow } from 'react-icons/si';
import { BsEmojiSunglasses } from 'react-icons/bs';

interface LearningResultProps {
  incorrectAnswers: IWord[];
  onClickStartAgain: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickExit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const LearningResult: FC<LearningResultProps> = ({
  incorrectAnswers,
  onClickExit,
  onClickStartAgain
}) => {
  const isIncorrectAnswers = Boolean(incorrectAnswers.length);
  return (
    <form className={classes.form}>
      <div className={classes.text}>
        <h3 className={classes.title}>Поздравляем ты закончил режим изучения слов!</h3>
        {isIncorrectAnswers ? (
          <>
            <p>
              Ты молодец! Не расстраивайся из-за ошибок, ведь ты только учишься! Повтори еще раз
              данные слова и данный режим. Также ты можешь создать из данных слов новый учебный
              блок!
            </p>
            <WordList words={incorrectAnswers} />
          </>
        ) : (
          <>
            <p>Невероятно! Ты не сдедал ни одной ошибки! Ты просто лучший!</p>
          </>
        )}
      </div>
      <div className={classes.control}>
        <MyButton onClick={(e) => onClickExit(e)}>Выход</MyButton>
        <MyButton onClick={(e) => onClickStartAgain(e)}>Начать заново</MyButton>
        {isIncorrectAnswers && <MyButton>Создать блок</MyButton>}
      </div>
    </form>
  );
};
