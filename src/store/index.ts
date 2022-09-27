import { configureStore } from "@reduxjs/toolkit";
import AppPersistReducer from "./root-reducer";
import {FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REHYDRATE,persistStore} from 'redux-persist'

const store = configureStore({
  reducer: AppPersistReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions:[FLUSH,PAUSE,PERSIST,PURGE,REGISTER,REGISTER,REHYDRATE]
    }
  })
})

export const persistor = persistStore(store);

export default store;