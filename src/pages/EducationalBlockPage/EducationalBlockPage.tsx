import { useState, type FC, useEffect, useCallback } from 'react';
import classes from './EducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { useParams } from 'react-router';
import { useGetEducationalBlockByIdQuery } from '../../store/educational-blocks/educational-blocks.api';
import { Wrapper } from '../../components/Wrapper';
import { Loader } from '../../components/Loader';
import { FlipCard } from '../../components/FlipCard';
import { type IWord } from '../../models/word.model';
import { ProgressBar } from '../../components/ProgressBar';
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs';
import { IconButton } from '../../components/UI/IconButton';
import { AnimatePresence, motion } from 'framer-motion';

export const EducationalBlockPage: FC = () => {
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

  return (
    <section className={classes.educationalBlockPage}>
      <Container>
        <Wrapper align="center" justify="center">
          {isLoading && <Loader />}
          {isError && <>Ошибка!</>}
          {isSuccess && (
            <Wrapper direction="column" gap={20}>
              <div className={classes.card}>
                <div>
                  <Wrapper direction="column" gap={30}>
                    <ProgressBar value={progressValue} />
                    <div style={{ height: '320px', width: '800px' }}>
                      <AnimatePresence>
                        {showCard && (
                          <motion.div
                            initial={{ x: 50, opacity: 0, rotateY: 60 }}
                            animate={{ x: 0, opacity: 1, rotateY: 0 }}
                            exit={{ x: -50, opacity: 0, rotateY: -60 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}>
                            <FlipCard
                              isFlipped={isFlipped}
                              flippedCard={flippedCard}
                              word={currentWord}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <Wrapper align="center" justify="center" gap={40}>
                      <IconButton
                        variant="secondary"
                        icon={<BsChevronLeft size={30} />}
                        onClick={handleClickPrevious}
                        disabled={indexWord === 0}
                      />
                      <div className={classes.progress}>
                        <span> {indexWord + 1}</span> / <span>{words.length}</span>
                      </div>
                      <IconButton
                        variant="secondary"
                        icon={<BsChevronRight size={30} />}
                        onClick={handleClickNext}
                        disabled={indexWord === words.length - 1}
                      />
                    </Wrapper>
                  </Wrapper>
                </div>
              </div>
            </Wrapper>
          )}
        </Wrapper>
      </Container>
    </section>
  );
};
