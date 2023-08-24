import { type FC } from 'react';
import classes from './SearchBar.module.scss';
import { MyInput } from '../UI/MyInput';
import { AiOutlineSearch } from 'react-icons/ai';
import { MyButton } from '../UI/MyButton';

interface SearchBarProps {
  value?: string;
}

export const SearchBar: FC<SearchBarProps> = () => {
  return (
    <div className={classes.searchBar}>
      <AiOutlineSearch size={25} />
      <MyInput placeholder="sets of cards" />
      <MyButton>Search</MyButton>
    </div>
  );
};
