import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = __API_URL__;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, {}) => headers
});

// const baseQueryWithReauth = async (
//   args: FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: FetchBaseQueryMeta,
// ) => {
//   const result = await baseQuery(args, api, extraOptions);
//   return result;
// };

export const api = createApi({
  baseQuery,
  endpoints: () => ({})
});
