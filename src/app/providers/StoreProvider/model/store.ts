import {
  Action,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { todoReducer } from 'entities/todo';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './types';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'], // только todos будет сохраняться
};

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    todos: todoReducer,
  };

  const reducerManager = createReducerManager(rootReducers);
  const persistedReducer = persistReducer(persistConfig, reducerManager.reduce as Reducer<StateSchema, Action, StateSchema>);

  const extraArgument: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: persistedReducer,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
      thunk: {
        extraArgument,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export { createReduxStore };

export const createPersistor = (store: ReturnType<typeof createReduxStore>) => persistStore(store);

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;

export type ExtraParamsThunkType<T> = {
  rejectValue: T;
};

export type ThunkExtraArg = {
  api: AxiosInstance;
  navigate?: (to: To, opttions?: NavigateOptions) => void;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
