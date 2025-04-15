import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { tagTypesList } from "../tag.types";

const baseURL = "http://204.197.173.195:5008/api/v1";
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
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
