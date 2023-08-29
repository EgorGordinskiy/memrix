import { useState, type FC, useEffect, type ChangeEvent, type MouseEvent } from 'react';
import { type IEducationalBlock } from '../../models/educational-block.model';
import { MyInput } from '../UI/MyInput';
import { MyButton } from '../UI/MyButton';
import { type IWord } from '../../models/word.model';
import { LearningStart } from '../LearningStart';
import { RewritingWord } from '../RewritingWord';
import { WritingFullWord } from '../WritingFullWord';
import { LearningResult } from '../LearningResult';
import { StageResult } from '../StageResult';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedComponent } from '../AnimatedСomponent';
import { useNavigate, useParams } from 'react-router';

interface LearningProcessProps {
  educationalBlock: IEducationalBlock;
}

export const LearningProcess: FC<LearningProcessProps> = ({ educationalBlock }) => {
  const replaceRandomLetters = (word: string): string => {
    if (word.length < 2) {
      return word;
    }

    const randomIndex1 = Math.floor(Math.random() * word.length);
    let randomIndex2 = Math.floor(Math.random() * word.length);

    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * word.length);
    }

    const replacedWord = word.split('');
    replacedWord[randomIndex1] = '_';
    replacedWord[randomIndex2] = '_';

    return replacedWord.join('');
  };

  const stages = ['rewritingWord', 'writtingFullWord'];

  const [words, setWords] = useState<IWord[]>(educationalBlock.words);
  const [step, setStep] = useState<number>(0);
  const [isStart, setIsStart] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const [stage, setStage] = useState<number>(1);
  const currentWord = educationalBlock.words[step];
  const [wordReplacedLetters, setWordReplacedLetters] = useState(
    replaceRandomLetters(educationalBlock.words[step].term)
  );

  useEffect(() => {
    if (stage === 2 && step > 0) {
      setWordReplacedLetters(replaceRandomLetters(educationalBlock.words[step].term));
    }
  }, [step, stage, educationalBlock.words]);

  const [answer, setAnswer] = useState('');
  const [isShowIntermediateResult, setIsShowIntermediateResult] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IWord[]>([]);

  const handleClickSendAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === currentWord.term.toLowerCase().trim()) {
      if (words.length !== step + 1) {
        setStep(step + 1);
      } else {
        setIsShowIntermediateResult(true);
      }
    } else {
      const isAlreadyIncorrect = incorrectAnswers.some(
        (item) => item.term.toLowerCase().trim() === currentWord.term.toLowerCase().trim()
      );

      if (!isAlreadyIncorrect) {
        setIncorrectAnswers([...incorrectAnswers, currentWord]);
      }
    }
    setAnswer('');
  };

  const handleChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleClickContinue = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsShowIntermediateResult(false);
    if (stage < 2) {
      setStep(0);
      setStage(stage + 1);
    } else {
      setIsFinish(true);
    }
  };
  const handleClickStart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsStart(true);
  };
  const navigate = useNavigate();

  const handleClickStartAgain = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.reload();
  };
  const handleClickExit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(`/block/${educationalBlock.id}`);
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      {isStart ? (
        <>
          {isFinish ? (
            <AnimatedComponent>
              <LearningResult
                incorrectAnswers={incorrectAnswers}
                onClickStartAgain={handleClickStartAgain}
                onClickExit={handleClickExit}
              />
            </AnimatedComponent>
          ) : (
            <>
              {isShowIntermediateResult ? (
                <StageResult
                  onClickContinue={handleClickContinue}
                  onClickStartAgain={handleClickStartAgain}
                  onClickExit={handleClickExit}
                />
              ) : (
                <>
                  {stage === 1 && (
                    <AnimatedComponent>
                      <RewritingWord
                        answer={answer}
                        onChangeAnswer={handleChangeAnswer}
                        onClickSendAnswer={handleClickSendAnswer}
                        currentWord={currentWord}
                      />
                    </AnimatedComponent>
                  )}
                  {stage === 2 && (
                    <AnimatedComponent>
                      <WritingFullWord
                        answer={answer}
                        onChangeAnswer={handleChangeAnswer}
                        onClickSendAnswer={handleClickSendAnswer}
                        currentWord={currentWord}
                        wordReplacedLetters={wordReplacedLetters}
                      />
                    </AnimatedComponent>
                  )}
                </>
              )}
            </>
          )}
        </>
      ) : (
        <AnimatedComponent>
          <LearningStart onClickStart={handleClickStart} onClickExit={handleClickExit} />
        </AnimatedComponent>
      )}
    </div>
  );
};
