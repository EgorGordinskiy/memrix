import { type FC } from 'react';
import classes from './WordItem.module.scss';
import { type IWord } from '../../models/word.model';
import { IconButton } from '../UI/IconButton';
import { AiOutlineSound } from 'react-icons/ai';

interface WordItemProps {
  word: IWord;
}

export const WordItem: FC<WordItemProps> = ({ word }) => {
  return (
    <div className={classes.wordItem}>
      <div className={classes.word}>
        <div className={classes.term}>{word.term}</div>
        <div className={classes.transcription}>{word.transcription}</div>
        <div className={classes.translation}> {word.translation}</div>
      </div>
      <IconButton icon={<AiOutlineSound size={20} />} />
    </div>
  );
};
