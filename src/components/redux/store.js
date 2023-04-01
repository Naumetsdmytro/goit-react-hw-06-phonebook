import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// export const persistor = persistStore(store);
