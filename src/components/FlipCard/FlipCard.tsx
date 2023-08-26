import { type FC } from 'react';
import classes from './FlipCard.module.scss';
import ReactCardFlip from 'react-card-flip';
import { type IWord } from '../../models/word.model';
import { IconButton } from '../UI/IconButton';
import { AiFillSound } from 'react-icons/ai';

interface FlipCardProps {
  word: IWord;
  isFlipped: boolean;
  flippedCard: () => void;
}

export const FlipCard: FC<FlipCardProps> = ({ word, isFlipped, flippedCard }) => {
  const handlerClickFlipped = (): void => flippedCard();
  const handleSpeakClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const voices = speechSynthesis.getVoices();
      const selectedVoice = voices[1]; // Выбираем голос под индексом 1

      const speech = new SpeechSynthesisUtterance(word.term);
      speech.voice = selectedVoice;
      speechSynthesis.speak(speech);
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>
          <span>{word.term}</span>
          <IconButton onClick={handleSpeakClick} icon={<AiFillSound size={27} />} />
        </h3>
        <p className={classes.transcription}>{word.transcription}</p>
      </div>

      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>{word.translation}</h3>
      </div>
    </ReactCardFlip>
  );
};
