import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';
import { StrictMode, Suspense } from 'react';
import { Loader } from './components/Loader';
import { router } from './components/RouterApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Suspense>
);
