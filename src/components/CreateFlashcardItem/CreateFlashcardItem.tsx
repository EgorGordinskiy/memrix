import { type ChangeEvent, type FC } from 'react';
import classes from './CreateFlashcardItem.module.scss';
import { MyInput } from '../UI/MyInput';
import { AiOutlineDelete } from 'react-icons/ai';
import { IconButton } from '../UI/IconButton';
import { type IWord } from '../../models/word.model';

interface CreateFlashcardItemProps {
  number: number;
  word: IWord;
  onChange: (index: number, updatedWord: IWord) => void;
  onDelete: (index: number) => void;
}

export const CreateFlashcardItem: FC<CreateFlashcardItemProps> = ({
  onDelete,
  onChange,
  number,
  word
}) => {
  const handleInputChange = (field: keyof IWord, value: string) => {
    const updatedWord = { ...word, [field]: value };
    onChange(number - 1, updatedWord);
  };

  return (
    <div className={classes.item}>
      <div className={classes.top}>
        <span className={classes.number}>{number}.</span>
        <IconButton
          type="button"
          icon={<AiOutlineDelete size={25} />}
          onClick={() => onDelete(number - 1)}
        />
      </div>
      <MyInput
        value={word.term}
        onChange={(e) => handleInputChange('term', e.target.value)}
        placeholder="термин"
      />

      <MyInput
        value={word.translation}
        onChange={(e) => handleInputChange('translation', e.target.value)}
        placeholder="определение"
      />
      <MyInput
        value={word.transcription}
        onChange={(e) => handleInputChange('transcription', e.target.value)}
        placeholder="транскрипция"
      />
    </div>
  );
};
