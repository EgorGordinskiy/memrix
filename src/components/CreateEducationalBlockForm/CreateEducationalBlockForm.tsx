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
        <h2 className={classes.title}>Creating a new set of cards</h2>
        <MyInput placeholder="name" />
        <MyButton variant="secondary">Add a cart</MyButton>
        <MyButton variant="secondary">Create</MyButton>
      </div>
      <div className={classes.content}>
        <div className={classes.words}>
          <CreateWordItem number={1} />
          <CreateWordItem number={2} />
        </div>
      </div>
    </form>
  );
};
