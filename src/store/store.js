import {
  configureStore
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import clientMiddleware from 'middlewares/clientMiddlware';
import unspashApi from 'api/unsplashApi';
import collection from 'store/collection/reducer';

export const store = configureStore({
  reducer: {
    collection
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat([clientMiddleware(unspashApi), thunk])
});
