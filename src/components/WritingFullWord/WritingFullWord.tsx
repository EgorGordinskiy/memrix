import { useState, type ChangeEvent, type FC, type MouseEvent } from 'react';
import classes from './WritingFullWord.module.scss';
import { type IWord } from '../../models/word.model';
import { MyInput } from '../UI/MyInput';
import { MyButton } from '../UI/MyButton';

interface WritingFullWordProps {
  answer: string;
  onChangeAnswer: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSendAnswer: (e: MouseEvent<HTMLButtonElement>) => void;
  currentWord: IWord;
  wordReplacedLetters: string;
}

export const WritingFullWord: FC<WritingFullWordProps> = ({
  answer,
  currentWord,
  onChangeAnswer,
  onClickSendAnswer,
  wordReplacedLetters
}) => {
  return (
    <form className={classes.form}>
      <div className={classes.text}>
        <p className={classes.term}>
          Напишите термин с пропущенными буквами:{' '}
          <b>
            {wordReplacedLetters} {currentWord.transcription}
          </b>
        </p>
        {/* <p className={classes.info}>Пишите вдумчиво, проговаривая термин.</p> */}
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
