import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './i18n';
import { Suspense } from 'react';
import { Loader } from './components/Loader';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);
