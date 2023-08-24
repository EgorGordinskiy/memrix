import { type FC } from 'react';
import classes from './ProgressBar.module.scss';

interface ProgressBarProps {
  value: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className={classes.progressBar}>
      <div className={classes.filler} style={{ width: `${value}%` }}></div>
    </div>
  );
};
