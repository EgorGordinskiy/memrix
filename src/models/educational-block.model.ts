import { type IWord } from './word.model';

export interface IEducationalBlock {
  id: number;
  name: string;
  languageTerm: string;
  languageTranslation: string;
  words: IWord[];
}
