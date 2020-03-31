import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "phonebook",
  storage,
  whitelist:['contacts']
};



const persistedReducer = persistReducer(persistConfig, rootReducer); //читает из локал сторадж
export const store = createStore(persistedReducer, devToolsEnhancer()); //заменили с rootReducer на импортированый persistedReducer
export const persistor = persistStore(store); // записывает в локал сторадж
