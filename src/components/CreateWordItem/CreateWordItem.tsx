import { type FC } from 'react';
import classes from './CreateWordItem.module.scss';
import { MyInput } from '../UI/MyInput';
import { AiOutlineDelete } from 'react-icons/ai';
import { IconButton } from '../UI/IconButton';

interface CreateWordItemProps {
  number: number;
}

export const CreateWordItem: FC<CreateWordItemProps> = ({ number }) => {
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
