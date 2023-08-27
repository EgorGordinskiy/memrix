import { type FC } from 'react';
import classes from './ControlFlipCards.module.scss';
import { IconButton } from '../UI/IconButton';
import { Wrapper } from '../Wrapper';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface ControlFlipCardsProps {
  onClickPrevious: () => void;
  onClickNext: () => void;
  isDisabledPrevious: boolean;
  isDisabledNext: boolean;
  numberOfCards: number;
  currentCardNumber: number;
}

export const ControlFlipCards: FC<ControlFlipCardsProps> = ({
  onClickPrevious,
  onClickNext,
  isDisabledNext,
  isDisabledPrevious,
  numberOfCards,
  currentCardNumber
}) => {
  return (
    <Wrapper align="center" justify="center" gap={40}>
      <IconButton
        variant="secondary"
        icon={<BsChevronLeft size={35} />}
        onClick={onClickPrevious}
        disabled={isDisabledPrevious}
      />
      <div className={classes.progress}>
        <span> {currentCardNumber}</span> / <span>{numberOfCards}</span>
      </div>
      <IconButton
        variant="secondary"
        icon={<BsChevronRight size={35} />}
        onClick={onClickNext}
        disabled={isDisabledNext}
      />
    </Wrapper>
  );
};
