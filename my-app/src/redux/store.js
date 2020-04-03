import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PERSIST } from "redux-persist";

const persistConfig = {
  key: "phonebook",
  storage,
  whitelist: ["contacts"],
  blacklist: ["_persist"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //читает из локал сторадж
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST]
    }
  })
}); //заменили с rootReducer на импортированый persistedReducer
export const persistor = persistStore(store); // записывает в локал сторадж
