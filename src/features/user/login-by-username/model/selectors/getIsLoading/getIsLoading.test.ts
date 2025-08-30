import { StateSchema } from 'app/providers/StoreProvider';
import { getIsLoading } from './getIsLoading';

describe('getIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginByUsername: {
        isLoading: true,
      },
    };
    expect(getIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getIsLoading(state as StateSchema)).toEqual(false);
  });
});
