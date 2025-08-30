import { Decorator } from '@storybook/react';
import {
    DeepPartial,
    ReducerList,
    StateSchema,
    StoreProvider
} from 'app/providers/StoreProvider';

const defaultAsyncReducers: ReducerList = {};

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
