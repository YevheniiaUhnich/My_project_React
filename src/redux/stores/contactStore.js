import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "../../redux/contacts/slice";
import filtersReducer from "../../redux/contactFilters/slice";
import authReducer from "../../redux/contactAuth/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import modalReducer from "../../redux/contactModal/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE === "development",
});

export const persistor = persistStore(store);
