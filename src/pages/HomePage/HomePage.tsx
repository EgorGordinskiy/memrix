import { type FC } from 'react';
import classes from './HomePage.module.scss';
import { useGetAllEducationalBlocksQuery } from '../../store/educational-blocks/educational-blocks.api';
import { Container } from '../../components/Container';
import { EducationalBlockList } from '../../components/EducationalBlockList';
import { Loader } from '../../components/Loader';
import { EducationalBlockCard } from '../../components/EducationalBlockCard';
import { Wrapper } from '../../components/Wrapper';
import { useOutletContext } from 'react-router';
import { SearchBar } from '../../components/SearchBar';

export const HomePage: FC = () => {
  const { isLoading, data, isSuccess, isError } = useGetAllEducationalBlocksQuery();
  const params = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  return (
    <section className={classes.homePage}>
      <Container>
        {isError && <>Ошибка!</>}
        {isLoading && <Loader />}
        {isSuccess && <EducationalBlockList educationalBlocks={data} />}
      </Container>
    </section>
  );
};
