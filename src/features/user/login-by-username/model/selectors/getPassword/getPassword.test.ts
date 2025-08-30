import { StateSchema } from 'app/providers/StoreProvider';
import { getPassword } from './getPassword';

describe('getPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginByUsername: {
        password: 'password',
      },
    };
    expect(getPassword(state as StateSchema)).toEqual('password');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getPassword(state as StateSchema)).toEqual('');
  });
});
