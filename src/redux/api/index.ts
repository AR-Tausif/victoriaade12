import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const victoriaApi = createApi({
  reducerPath: "victoriaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.223.184.53:5008/api/v1/seller" }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: (name) => `/`,
    }),
  }),
});

export const { useGetAllUsersQuery } = victoriaApi;
