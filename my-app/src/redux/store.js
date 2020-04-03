// import { createStore } from "redux";
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "phonebook",
  storage,
  whitelist:['contacts'],
  blacklist:['_persist']
};


const persistedReducer = persistReducer(persistConfig, rootReducer); //читает из локал сторадж
export const store = configureStore({reducer:persistedReducer}); //заменили с rootReducer на импортированый persistedReducer
export const persistor = persistStore(store); // записывает в локал сторадж
