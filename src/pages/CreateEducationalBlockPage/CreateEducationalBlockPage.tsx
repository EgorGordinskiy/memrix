/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC, type MouseEvent } from 'react';
import classes from './CreateEducationalBlockPage.module.scss';
import { Container } from '../../components/Container';
import { CreateEducationalBlockForm } from '../../components/CreateEducationalBlockForm';
import { useCreateEducationalBlockMutation } from '../../store/educational-blocks/educational-blocks.api';
import { type IEducationalBlock } from '../../models/educational-block.model';

export const CreateEducationalBlockPage: FC = () => {
  const [createEducationalBlock, isError] = useCreateEducationalBlockMutation();
  const handleClickCreateEducationalBlock = async (
    e: MouseEvent<HTMLButtonElement>,
    educationalBlock: IEducationalBlock
  ) => {
    e.preventDefault();
    await createEducationalBlock(educationalBlock);
  };
  return (
    <section className={classes.createEducationalBlockPage}>
      <div className={classes.tools}>
        <Container maxWidth={1000}>
          <CreateEducationalBlockForm onClickCreate={handleClickCreateEducationalBlock} />
        </Container>
      </div>
    </section>
  );
};
