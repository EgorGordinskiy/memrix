import { type ReactNode, type FC, type CSSProperties } from 'react';
import classes from './Wrapper.module.scss';

interface WrapperProps {
  direction?: 'row' | 'column';
  gap?: CSSProperties['gap'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  children: ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({
  direction = 'row',
  gap = '0',
  justify = 'flex-start',
  align = 'stretch',
  flexWrap = 'nowrap',
  children
}) => {
  const wrapperStyles = {
    flexDirection: direction,
    gap,
    justifyContent: justify,
    alignItems: align,
    flexWrap
  };
  return (
    <div className={classes.wrapper} style={wrapperStyles}>
      {children}
    </div>
  );
};
