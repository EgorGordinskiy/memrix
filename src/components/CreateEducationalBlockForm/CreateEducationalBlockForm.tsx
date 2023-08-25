import { type FC } from 'react';
import classes from './CreateEducationalBlockForm.module.scss';
import { MyInput } from '../UI/MyInput';
import { CreateWordItem } from '../CreateWordItem';
import { MyButton } from '../UI/MyButton';
import { IconButton } from '../UI/IconButton';
import { AiOutlinePlus } from 'react-icons/ai';

interface CreateEducationalBlockFormProps {
  value?: string;
}

export const CreateEducationalBlockForm: FC<CreateEducationalBlockFormProps> = () => {
  return (
    <form className={classes.form}>
      <div className={classes.panel}>
        <span className={classes.title}>Creating a new set of flashcards</span>
        <MyInput placeholder="name" />
        <MyButton variant="secondary">add a flashcard</MyButton>
        <MyButton variant="secondary">create</MyButton>
      </div>
      <div className={classes.content}>
        <div className={classes.words}>
          <CreateWordItem number={1} />
          <CreateWordItem number={2} />
          <CreateWordItem number={3} />
          <CreateWordItem number={4} />
          <CreateWordItem number={5} />
          <CreateWordItem number={6} />
          <CreateWordItem number={7} />
        </div>
      </div>
    </form>
  );
};
