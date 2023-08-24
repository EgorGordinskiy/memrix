import { type FC } from 'react';
import classes from './FlipCard.module.scss';
import ReactCardFlip from 'react-card-flip';
import { type IWord } from '../../models/word.model';

interface FlipCardProps {
  word: IWord;
  isFlipped: boolean;
  flippedCard: () => void;
}

export const FlipCard: FC<FlipCardProps> = ({ word, isFlipped, flippedCard }) => {
  const handlerClickFlipped = (): void => flippedCard();

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>{word.term}</h3>
        <p className={classes.transcription}>{word.transcription}</p>
      </div>

      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>{word.translation}</h3>
      </div>
    </ReactCardFlip>
  );
};
