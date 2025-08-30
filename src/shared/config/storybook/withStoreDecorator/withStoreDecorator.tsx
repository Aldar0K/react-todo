import { Decorator } from '@storybook/react';
import {
  ReducerList,
  StateSchema,
  StoreProvider
} from 'app/providers/StoreProvider';
import { loginByUsernameReducer } from 'features/user/login-by-username/model/slice';

const defaultAsyncReducers: ReducerList = {
  loginByUsername: loginByUsernameReducer
};

export const withStoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList): Decorator =>
  Story =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
