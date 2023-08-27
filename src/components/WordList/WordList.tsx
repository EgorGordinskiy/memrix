import { type FC } from 'react';
import classes from './WordList.module.scss';
import { type IWord } from '../../models/word.model';
import { WordItem } from '../WordItem';

interface WordListProps {
  words: IWord[];
}

export const WordList: FC<WordListProps> = ({ words }) => {
  return (
    <ul className={classes.wordList}>
      {words.map((word) => (
        <WordItem key={word.term} word={word} />
      ))}
    </ul>
  );
};
