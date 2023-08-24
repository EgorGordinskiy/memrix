import { type FC } from 'react';
import classes from './EducationalBlockCard.module.scss';
import { type IEducationalBlock } from '../../models/educational-block.model';
import { Wrapper } from '../Wrapper';
import { useNavigate } from 'react-router';

interface EducationalBlockCardProps {
  educationalBlock: IEducationalBlock;
}

export const EducationalBlockCard: FC<EducationalBlockCardProps> = ({ educationalBlock }) => {
  const { name, id } = educationalBlock;
  const navigate = useNavigate();
  const handlerClick = (): void => {
    navigate(`/block/${id}`);
  };
  return (
    <div className={classes.educationalBlockCard} onClick={handlerClick}>
      <h3 className={classes.name}>{name}</h3>
    </div>
  );
};
