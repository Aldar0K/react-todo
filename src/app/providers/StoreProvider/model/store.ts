import {
  Action,
  Reducer,
  ReducersMapObject,
  configureStore,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { NavigateOptions, To } from 'react-router-dom';
import { $api } from 'shared/api';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './types';

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<StateSchema, Action, StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

// TODO restore the redux persist configuration
// const persistor = persistStore(createReduxStore());

export { createReduxStore };

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
