import { type InputHTMLAttributes, type FC } from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
}

export const MyInput: FC<MyInputProps> = ({ variant = 'primary', ...rest }) => {
  const className = `${classes.input} ${classes[`${variant}`]}`;
  return <input className={className} {...rest}></input>;
};
