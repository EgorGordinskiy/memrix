import { configureStore } from '@reduxjs/toolkit';
import { educationalBlockApi } from './educational-blocks/educational-blocks.api';
import { libraryReducer } from './educational-blocks/library.slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const store = configureStore({
  reducer: {
    [educationalBlockApi.reducerPath]: educationalBlockApi.reducer,
    library: libraryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(educationalBlockApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
