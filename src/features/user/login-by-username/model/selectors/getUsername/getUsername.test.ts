import { StateSchema } from 'app/providers/StoreProvider';
import { getUsername } from './getUsername';

describe('getUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginByUsername: {
        username: 'username',
      },
    };
    expect(getUsername(state as StateSchema)).toEqual('username');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUsername(state as StateSchema)).toEqual('');
  });
});
