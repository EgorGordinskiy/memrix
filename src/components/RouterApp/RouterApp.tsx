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
import { TestingPage } from '../../pages/TestingPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/create',
        element: <CreateEducationalBlockPage />
      }
    ]
  },
  {
    path: '/block/:id',
    element: <LayoutEducationalBlock />,
    children: [
      {
        path: '/block/:id',
        element: <EducationalBlockPage />
      },
      {
        path: '/block/:id/flashcards',
        element: <EducationalBlockFlashcardsPage />
      },
      {
        path: '/block/:id/learning',
        element: <LearningEducationalBlockPage />
      }
    ]
  }
]);
