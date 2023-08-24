import { configureStore } from '@reduxjs/toolkit';
import { educationalBlockApi } from './educational-blocks/educational-blocks.api';
import { educationalBlockCurrentReducer } from './educational-blocks/educational-block-current.slice';

const store = configureStore({
  reducer: {
    [educationalBlockApi.reducerPath]: educationalBlockApi.reducer,
    educationalBlockCurrent: educationalBlockCurrentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(educationalBlockApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
