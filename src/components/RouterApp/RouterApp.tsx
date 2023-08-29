import { type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { HomePage } from '../../pages/HomePage';
import { Layout } from '../Layout';
import { EducationalBlockPage } from '../../pages/EducationalBlockPage';
import { CreateEducationalBlockPage } from '../../pages/CreateEducationalBlockPage';
import { LibraryPage } from '../../pages/LibraryPage';
import { EducationalBlockFlashcardsPage } from '../../pages/EducationalBlockFlashcardsPage';
import { LayoutEducationalBlock } from '../LayoutEducationalBlock';
import { LearningEducationalBlockPage } from '../../pages/LearningEducationalBlockPage';

export const RouterApp: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/create" element={<CreateEducationalBlockPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Route>
      <Route path="/block/:id" element={<LayoutEducationalBlock />}>
        <Route path="/block/:id" element={<EducationalBlockPage />} />
        <Route path="/block/:id/flashcards" element={<EducationalBlockFlashcardsPage />} />
        <Route path="/block/:id/learning" element={<LearningEducationalBlockPage />} />
      </Route>
    </Routes>
  );
};
