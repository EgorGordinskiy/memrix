import { type ReactNode, type CSSProperties, type FC } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  maxWidth?: CSSProperties['maxWidth'];
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ maxWidth = 1200, children }) => {
  return (
    <div className={classes.container} style={{ maxWidth }}>
      {children}
    </div>
  );
};
