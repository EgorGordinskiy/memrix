/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, type FC, type ChangeEvent, type MouseEvent } from 'react';
import classes from './CreateEducationalBlockForm.module.scss';
import { CreateFlashcardItem } from '../CreateFlashcardItem';
import { MyInput } from '../UI/MyInput';
import { MyButton } from '../UI/MyButton';
import { type IWord } from '../../models/word.model';
import { type IEducationalBlock } from '../../models/educational-block.model';
import uuid from 'react-uuid';
import { AnimatedComponent } from '../AnimatedСomponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

interface CreateEducationalBlockFormProps {
  onClickCreate: (e: MouseEvent<HTMLButtonElement>, educationalBlock: IEducationalBlock) => void;
}

export const CreateEducationalBlockForm: FC<CreateEducationalBlockFormProps> = ({
  onClickCreate
}) => {
  const [name, setName] = useState('');
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const [newWords, setNewWords] = useState<IWord[]>([
    {
      term: '',
      translation: '',
      transcription: ''
    }
  ]);

  const handleAddFlashcard = () => {
    setNewWords((prevWords) => [
      ...prevWords,
      {
        term: '',
        translation: '',
        transcription: ''
      }
    ]);
  };
  const handleFlashcardDelete = (index: number) => {
    if (newWords.length > 1) setNewWords((prevWords) => prevWords.filter((_, i) => i !== index));
  };

  const handleFlashcardChange = (index: number, updatedWord: IWord) => {
    setNewWords((prevWords) => {
      const newWordsCopy = [...prevWords];
      newWordsCopy[index] = updatedWord;
      return newWordsCopy;
    });
  };

  const isNameValid = () => name.trim() !== '';
  const isFlashcardValid = (word: IWord) =>
    word.term.trim() !== '' && word.translation.trim() !== '' && word.transcription.trim() !== '';

  const handleFormSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!isNameValid() || newWords.some((word) => !isFlashcardValid(word))) {
      toast.error('Заполните все поля!');
    } else {
      const educationalBlock: IEducationalBlock = {
        id: uuid(),
        name,
        words: newWords
      };

      onClickCreate(e, educationalBlock);
      toast.success('Модуль успешно создан!');
      setNewWords([
        {
          term: '',
          translation: '',
          transcription: ''
        }
      ]);
      setName('');
    }
  };

  return (
    <form className={classes.form}>
      <ToastContainer />
      <div className={classes.name}>
        <MyInput
          placeholder="Введите название"
          isValid={true}
          value={name}
          onChange={(e) => handleChangeName(e)}
        />
      </div>

      <ul className={classes.words}>
        {newWords.map((newWord, index) => (
          <AnimatedComponent key={index}>
            <CreateFlashcardItem
              onChange={handleFlashcardChange}
              onDelete={handleFlashcardDelete}
              number={index + 1}
              word={newWord}
            />
          </AnimatedComponent>
        ))}
      </ul>

      <div className={classes.addCard}>
        <MyButton type="button" onClick={handleAddFlashcard}>
          + Добавить карточку
        </MyButton>
      </div>
      <div className={classes.create}>
        <MyButton type="submit" onClick={(e) => handleFormSubmit(e)}>
          Создать
        </MyButton>
      </div>
    </form>
  );
};
