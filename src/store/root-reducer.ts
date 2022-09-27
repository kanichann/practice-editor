import { combineReducers } from "redux";
import { darkModeReducer } from "./slices/dark-mode/darkMode";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { fileReducers } from "./slices/files/Files";

const persistConfig = {
  key: 'root',
  storage
}
const comReducers = combineReducers({
  darkMode: darkModeReducer,
  files: fileReducers
})

const AppPersistReducer = persistReducer(persistConfig,comReducers)

export default AppPersistReducer