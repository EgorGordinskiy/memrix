import { type FC } from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/HomePage';
import { Layout } from '../Layout';
import { EducationalBlockPage } from '../../pages/EducationalBlockPage';
import { CreateEducationalBlockPage } from '../../pages/CreateEducationalBlockPage';

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/block/:id" index element={<EducationalBlockPage />} />
        <Route path="/create" index element={<CreateEducationalBlockPage />} />
      </Route>
    </Routes>
  );
};
