import { type FC } from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { PiStudentFill } from 'react-icons/pi';

export const Logo: FC = () => {
  return (
    <Link className={classes.logo} to="/">
      <span>Memrix</span>
      <PiStudentFill size={25} />
    </Link>
  );
};
