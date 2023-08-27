/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, type FC } from 'react';
import classes from './EducationalBlockFlashcardsPage.module.scss';
import { useParams } from 'react-router-dom';
import { useGetEducationalBlockByIdQuery } from '../../store/educational-blocks/educational-blocks.api';
import { type IWord } from '../../models/word.model';
import { Container } from '../../components/Container';
import { Wrapper } from '../../components/Wrapper';
import { ProgressBar } from '../../components/ProgressBar';
import { AnimatePresence, motion } from 'framer-motion';
import { FlipCard } from '../../components/FlipCard';
import { ControlFlipCards } from '../../components/ControlFlipCards';
import { Loader } from '../../components/Loader';
import { PiChatsThin, PiDogThin, PiGraduationCapThin } from 'react-icons/pi';
import { type INavigationItem } from '../../models/navigation-item.model';
import { ModePanel } from '../../components/ModePanel';
import { useTranslation } from 'react-i18next';

export const EducationalBlockFlashcardsPage: FC = () => {
  const { id } = useParams();
  const { isSuccess, isLoading, isError, data } = useGetEducationalBlockByIdQuery(id);
  const [indexWord, setIndexWord] = useState(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(true);
  const words: IWord[] = isSuccess ? data.words : [];
  const currentWord = words[indexWord];

  function flippedCard() {
    setIsFlipped(!isFlipped);
  }

  const value = indexWord + 1;
  const progressValue = (value / words.length) * 100;

  const handleClickNext = () => {
    if (indexWord !== words.length - 1) {
      setIndexWord(indexWord + 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  };
  const handleClickPrevious = () => {
    if (indexWord !== 0) {
      setIndexWord(indexWord - 1);
      setShowCard(false);

      setTimeout(() => {
        setIsFlipped(false);
        setShowCard(true);
      }, 460);
    }
  };

  const { t } = useTranslation();

  const modes: INavigationItem[] = [
    {
      id: 2,
      name: t('ed-block_terms'),
      path: `/block/${id}`,
      icon: <PiDogThin size={27} />
    },
    {
      id: 0,
      name: t('ed-block_learning'),
      path: '/',
      icon: <PiGraduationCapThin size={27} />
    },
    {
      id: 1,
      name: t('ed-block_testing'),
      path: '/',
      icon: <PiChatsThin size={27} />
    }
  ];

  return (
    <section className={classes.educationalBlockFlashcardsPage}>
      <Container maxWidth={880}>
        {isError && <>Error</>}
        {isLoading && <Loader />}
        {isSuccess && (
          <Wrapper direction="column" align="center" gap={14}>
            <ProgressBar value={progressValue} />
            <ModePanel modes={modes} />
            <div style={{ height: '320px', width: '100%' }}>
              <AnimatePresence>
                {showCard && (
                  <motion.div
                    initial={{ x: 50, opacity: 0, rotateY: 60 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    exit={{ x: -50, opacity: 0, rotateY: -60 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}>
                    <FlipCard isFlipped={isFlipped} flippedCard={flippedCard} word={currentWord} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ControlFlipCards
              isDisabledPrevious={indexWord === 0}
              isDisabledNext={indexWord === words.length - 1}
              onClickNext={handleClickNext}
              onClickPrevious={handleClickPrevious}
              currentCardNumber={indexWord + 1}
              numberOfCards={words.length}
            />
          </Wrapper>
        )}
      </Container>
    </section>
  );
};
