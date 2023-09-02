import { type IWord } from './word.model';

export interface IEducationalBlock {
  id: number | string;
  name: string;
  words: IWord[];
}
