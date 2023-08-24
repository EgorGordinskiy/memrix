import { type ReactNode, type FC, type ButtonHTMLAttributes } from 'react';
import classes from './MyButton.module.scss';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export const MyButton: FC<MyButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const className = `${classes.button} ${classes[`${variant}`]}`;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};
