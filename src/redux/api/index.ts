import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut } from "../features/auth.slice";
import { tagTypesList } from "../tag.types";
// TODO: Change base URL
// const baseURL = "http://192.168.10.180:5008/api/v1";
// const baseURL = "http://172.252.13.74:5008/api/v1";
const baseURL = "https://assured-tidy-sunbeam.ngrok-free.app/api/v1"

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
    // Only logout for authentication errors, not for all 404s
    if (status === 401) {
      api.dispatch(logOut());
      window.location.href = '/login';
    }
  }
  return result;
};

// export const victoriaBaseApi = createApi({
//   reducerPath: "victoriaApi",
//   baseQuery: baseQueryWithReauth,
//   tagTypes: ["adminInfo"],
//   endpoints: () => ({}),
// });




export const victoriaBaseApi = createApi({
  reducerPath: "victoriaApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [...tagTypesList, "adminInfo"],
  endpoints: () => ({}), // Empty initial setup for endpoints
});