import { configureStore, ThunkAction, Action, combineReducers, } from '@reduxjs/toolkit'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loadingReducer from './slice/loading'
import orderReducer from './slice/order'
import searchReducer from './slice/search'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['router'], // not save to local storage
}

const rootReducer = combineReducers({
  loading: loadingReducer,
  order: orderReducer,
  search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
