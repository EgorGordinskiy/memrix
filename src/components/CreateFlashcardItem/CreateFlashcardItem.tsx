import { type FC } from 'react';
import classes from './CreateFlashcardItem.module.scss';
import { MyInput } from '../UI/MyInput';
import { AiOutlineDelete } from 'react-icons/ai';
import { IconButton } from '../UI/IconButton';

interface CreateFlashcardItemProps {
  number: number;
}

export const CreateFlashcardItem: FC<CreateFlashcardItemProps> = ({ number }) => {
  return (
    <div className={classes.item}>
      <div className={classes.top}>
        <span className={classes.number}>{number}.</span>
        <IconButton icon={<AiOutlineDelete size={25} />} />
      </div>
      <MyInput variant="secondary" placeholder="term" />
      <MyInput variant="secondary" placeholder="translation" />
      <MyInput variant="secondary" placeholder="transcription" />
    </div>
  );
};
