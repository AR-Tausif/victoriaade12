import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseURL = "http://159.223.184.53:1214/api/v1";
const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
  credentials: "include",
});

export const victoriaBaseApi = createApi({
  reducerPath: "victoriaApi",
  baseQuery,
  endpoints: () => ({}),
});
