import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { createPersistor, createReduxStore } from '../model/store';
import { DeepPartial, StateSchema } from '../model/types';

type StoreProviderProps = {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
};

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  const persistor = createPersistor(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
