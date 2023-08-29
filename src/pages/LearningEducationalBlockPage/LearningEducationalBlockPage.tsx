import { useState, useEffect, type FC, type ChangeEvent, type MouseEvent } from 'react';
import classes from './LearningEducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { useParams } from 'react-router-dom';
import { useGetEducationalBlockByIdQuery } from '../../store/educational-blocks/educational-blocks.api';
import { MyInput } from '../../components/UI/MyInput';
import { MyButton } from '../../components/UI/MyButton';
import { type IWord } from '../../models/word.model';
import { LearningProcess } from '../../components/LearningProcess';
import { Loader } from '../../components/Loader';

export const LearningEducationalBlockPage: FC = () => {
  const { id } = useParams();
  const { isSuccess, isLoading, isError, data } = useGetEducationalBlockByIdQuery(id);

  return (
    <section className={classes.learningEducationalBlockPage}>
      <Container maxWidth={900}>
        {isLoading && <Loader />}
        {isSuccess && <LearningProcess educationalBlock={data} />}
      </Container>
    </section>
  );
};
