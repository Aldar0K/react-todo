import {
  ReducerList,
  ReduxStoreWithManager,
  StateSchemaKey,
  useAppDispatch,
} from 'app/providers/StoreProvider';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

type DynamicModuleLoaderProps = {
  children: ReactNode;
  reducers: ReducerList;
  destroyAfterUnmount?: boolean;
};

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, destroyAfterUnmount = true } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (destroyAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey, _reducer]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
