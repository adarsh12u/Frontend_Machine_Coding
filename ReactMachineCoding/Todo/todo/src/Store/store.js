import {configureStore} from "@reduxjs/toolkit"
import reducer from "./slice"
import { combineReducers } from '@reduxjs/toolkit'

import {persistReducer, persistStore} from "redux-persist"

import storage from 'redux-persist/lib/storage'

const rootreducer = combineReducers({
    todo : reducer
})


const persist = persistReducer({
  key:'root',
  storage,
  version:1,
},rootreducer)

export const store = configureStore({
       reducer:persist,
       middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck:false})
});



export const persiststores = persistStore(store)
export default  store

