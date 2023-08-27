import { type FC } from 'react';
import classes from './EducationalBlockList.module.scss';
import { type IEducationalBlock } from '../../models/educational-block.model';
import { Wrapper } from '../Wrapper';
import { EducationalBlockCard } from '../EducationalBlockCard';

interface EducationalBlockListProps {
  educationalBlocks: IEducationalBlock[];
}

export const EducationalBlockList: FC<EducationalBlockListProps> = ({ educationalBlocks }) => {
  return (
    <ul className={classes.educationalBlockList}>
      {educationalBlocks.map((educationalBlock) => (
        <li key={educationalBlock.id}>
          <EducationalBlockCard educationalBlock={educationalBlock} />
        </li>
      ))}
    </ul>
  );
};
