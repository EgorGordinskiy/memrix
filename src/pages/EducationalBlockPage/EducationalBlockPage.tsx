/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type FC } from 'react';
import classes from './EducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { useParams } from 'react-router';
import { useGetEducationalBlockByIdQuery } from '../../store/educational-blocks/educational-blocks.api';
import { Wrapper } from '../../components/Wrapper';
import { Loader } from '../../components/Loader';
import { type IWord } from '../../models/word.model';
import { useTranslation } from 'react-i18next';
import { ModePanel } from '../../components/ModePanel';
import { type INavigationItem } from '../../models/navigation-item.model';
import { PiChatsThin, PiDogThin, PiGraduationCapThin } from 'react-icons/pi';
import { WordList } from '../../components/WordList';

export const EducationalBlockPage: FC = () => {
  const { id } = useParams();
  const { isSuccess, isLoading, isError, data } = useGetEducationalBlockByIdQuery(id);
  const words: IWord[] = isSuccess ? data.words : [];

  const { t } = useTranslation();

  const modes: INavigationItem[] = [
    {
      id: 2,
      name: t('ed-block_flashcards'),
      path: `/block/${id}/flashcards`,
      icon: <PiDogThin size={27} />
    },
    {
      id: 0,
      name: t('ed-block_learning'),
      path: `/block/${id}/learning`,
      icon: <PiGraduationCapThin size={27} />
    },
    {
      id: 1,
      name: t('ed-block_testing'),
      path: `/block/${id}/testing`,
      icon: <PiChatsThin size={27} />
    }
  ];

  return (
    <section className={classes.educationalBlockPage}>
      <Container maxWidth={800}>
        {isLoading && (
          <Wrapper height="70vh" align="center" justify="center">
            <Loader />
          </Wrapper>
        )}
        {isError && <>Ошибка!</>}
        {isSuccess && (
          <Wrapper width="100%" direction="column" align="center" gap={20}>
            <ModePanel modes={modes} />
            {words && <WordList words={words} />}
          </Wrapper>
        )}
      </Container>
    </section>
  );
};
