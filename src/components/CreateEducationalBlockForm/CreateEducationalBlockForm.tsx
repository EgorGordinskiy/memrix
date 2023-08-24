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
      <div className={classes.top}>
        <h2 className={classes.title}>Creating a new set of cards</h2>
        <MyInput variant="secondary" placeholder="name" />
        <MyButton>Create</MyButton>
      </div>
      <div className={classes.words}>
        <CreateWordItem number={1} />
        <div className={classes.btn}>
          <IconButton variant="secondary" icon={<AiOutlinePlus size={25} />} />
        </div>
      </div>
    </form>
  );
};
