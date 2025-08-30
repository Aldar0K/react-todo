import { StateSchema } from 'app/providers/StoreProvider';

export const getError = (state: DeepPartial<StateSchema>) => state?.loginByUsername?.error || '';
