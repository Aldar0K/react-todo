import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';
import { User, userActions } from 'entities/user';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  const api: jest.MockedFunctionDeep<AxiosStatic> = mockedAxios;
  const navigate: jest.MockedFn<any> = jest.fn();

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const user: User = { id: '1', username: 'username' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: user }));
    const action = loginByUsername({
      username: 'username',
      password: '123',
    });
    const result = await action(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(user);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({
      username: 'username',
      password: '123',
    });
    const result = await action(dispatch, getState, { api, navigate });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Your login or password is wrong!');
  });
});
