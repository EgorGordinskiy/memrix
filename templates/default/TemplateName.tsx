import { type FC } from 'react';
import classes from './TemplateName.module.scss';

interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={classes.templateName}></div>;
};
