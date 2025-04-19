import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { tagTypesList } from "../tag.types";
import { logOut } from "../features/auth.slice";
// TODO: Change base URL
const baseURL = "http://192.168.10.180:5008/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
  credentials: "include",
});

// Create a custom base query with error handling
const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQuery(args, api, extraOptions);
  
  // Handle errors
  if (result.error) {
    const status = result.error.status;
    // If unauthorized or not found, logout user
    if (status === 401 || status === 404) {
      api.dispatch(logOut());
      // You can also use window.location.href for hard redirect
      window.location.href = '/login';
    }
  }
  return result;
};

export const victoriaBaseApi = createApi({
  reducerPath: "victoriaApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: tagTypesList,
  endpoints: () => ({}),
});
