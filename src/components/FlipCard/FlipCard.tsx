/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, type FC, useState } from 'react';
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
const synth = window.speechSynthesis;

export const FlipCard: FC<FlipCardProps> = ({ word, isFlipped, flippedCard }) => {
  const handlerClickFlipped = (): void => flippedCard();

  const [selectedVoice, setSelectedVoice] = useState<number>(1);
  if (!synth) {
    console.error('error speech synthesis');
  }

  const handleSpeakClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    textValue: string
  ) => {
    e.stopPropagation();
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textValue);
    utterance.voice = synth.getVoices()[selectedVoice];

    synth.speak(utterance);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>
          <span>{word.term}</span>
          <IconButton
            onClick={(e) => handleSpeakClick(e, word.term)}
            icon={<AiFillSound size={27} />}
          />
        </h3>
        <p className={classes.transcription}>{word.transcription}</p>
      </div>

      <div className={classes.card} onClick={handlerClickFlipped}>
        <h3 className={classes.word}>{word.translation}</h3>
      </div>
    </ReactCardFlip>
  );
};
