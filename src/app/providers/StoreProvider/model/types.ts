import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from 'entities/article';
import { CounterSchema } from 'entities/counter';
import { ProfileSchema } from 'entities/profile';
import { UserSchema } from 'entities/user';
import { AddCommentSchema } from 'features/user/add-comment';
import { LoginByUsernameSchema } from 'features/user/login-by-username';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export type StateSchema = {
  counter: CounterSchema;
  user: UserSchema;

  // async reducers
  loginByUsername?: LoginByUsernameSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addComment?: AddCommentSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKey, Reducer];

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
  reducerManager: ReducerManager;
};
