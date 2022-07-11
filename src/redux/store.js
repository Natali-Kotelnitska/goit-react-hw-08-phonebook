import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
// import contactsReducer from './contacts/contactsReducer';
// import filter from './contacts/contactsReducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  // blacklist: ['filter'],
  whitelist: [],
};
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
  // blacklist: ['somethingTemporary'],
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});
// //COMMENT configureStore (object {reducer(object or combineReducers()), middleware?, devTools?}), ...
const store = configureStore({
  // auth: persistReducer(authPersistConfig, authReducer),
  // contacts: persistReducer(contactsPersistConfig, contactsReducer),
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
export { store, persistor };
