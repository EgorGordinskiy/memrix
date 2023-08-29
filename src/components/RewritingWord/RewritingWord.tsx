import { type ChangeEvent, type FC, type MouseEvent } from 'react';
import classes from './RewritingWord.module.scss';
import { type IWord } from '../../models/word.model';
import { MyInput } from '../UI/MyInput';
import { MyButton } from '../UI/MyButton';

interface RewritingWordProps {
  answer: string;
  onChangeAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSendAnswer: (e: MouseEvent<HTMLButtonElement>) => void;
  currentWord: IWord;
}

export const RewritingWord: FC<RewritingWordProps> = ({
  answer,
  currentWord,
  onChangeAnswer,
  onClickSendAnswer
}) => {
  return (
    <form className={classes.form}>
      <div className={classes.text}>
        <p className={classes.term}>
          Перепишите термин:{' '}
          <b>
            {currentWord.term} {currentWord.transcription}
          </b>
        </p>
        <p className={classes.info}>Пишите вдумчиво, проговаривая термин.</p>
      </div>

      <div className={classes.control}>
        <MyInput placeholder="термин" value={answer} onChange={(e) => onChangeAnswer(e)} />
        <MyButton type="submit" onClick={(e) => onClickSendAnswer(e)}>
          Отправить
        </MyButton>
      </div>
    </form>
  );
};
