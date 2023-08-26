import { type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { HomePage } from '../../pages/HomePage';
import { Layout } from '../Layout';
import { EducationalBlockPage } from '../../pages/EducationalBlockPage';
import { CreateEducationalBlockPage } from '../../pages/CreateEducationalBlockPage';
import { LibraryPage } from '../../pages/LibraryPage';

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/block/:id" element={<EducationalBlockPage />} />
        <Route path="/create" element={<CreateEducationalBlockPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Route>
      <Route path="*">
        <Navigate to="/" />
      </Route>
    </Routes>
  );
};
