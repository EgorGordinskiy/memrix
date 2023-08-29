import { type FC, type MouseEvent } from 'react';
import classes from './StageResult.module.scss';
import { MyButton } from '../UI/MyButton';
import { AnimatedComponent } from '../AnimatedСomponent';

interface StageResultProps {
  onClickContinue: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickStartAgain: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickExit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const StageResult: FC<StageResultProps> = ({
  onClickContinue,
  onClickStartAgain,
  onClickExit
}) => {
  return (
    <AnimatedComponent>
      <form className={classes.form}>
        <div className={classes.text}>
          <h3 className={classes.title}>Поздравляем этап пройден! Ты молодец!</h3>
        </div>
        <div className={classes.control}>
          <MyButton onClick={(e) => onClickExit(e)}>Выход</MyButton>
          <MyButton onClick={(e) => onClickStartAgain(e)}>Начать заново</MyButton>
          <MyButton type="submit" onClick={(e) => onClickContinue(e)}>
            Продолжить
          </MyButton>
        </div>
      </form>
    </AnimatedComponent>
  );
};
