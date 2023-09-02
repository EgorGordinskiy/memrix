import { type InputHTMLAttributes, type FC } from 'react';
import classes from './MyInput.module.scss';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary';
  isValid?: boolean;
}

export const MyInput: FC<MyInputProps> = ({ variant = 'primary', isValid = true, ...rest }) => {
  const className = `${classes.input} ${classes[`${variant}`]}  ${!isValid ? classes.invalid : ''}`;
  return <input className={className} {...rest}></input>;
};
