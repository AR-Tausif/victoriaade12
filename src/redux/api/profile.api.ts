
// src/api/victoriaApi/endpoints/adminProfile.ts

import { victoriaBaseApi } from ".";



export const adminProfileApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
     // Fetching admin profile
     adminProfile: builder.query({
      query: () => `/admin`,
      providesTags: ["adminInfo"], // This query will provide the "adminInfo" tag
    }),
      // Editing the admin profile
      editProfile: builder.mutation({
        query: (userInfo: FormData) => ({
          url: "/overview/update-admin", // API endpoint for updating the admin profile
          method: "PUT",
          body: userInfo,
        }),
        invalidatesTags: ["adminInfo"], // Invalidating the "adminInfo" tag after the mutation
      }),
  }),
});

export const { useAdminProfileQuery, useEditProfileMutation } = adminProfileApi;



// import { victoriaBaseApi } from ".";
// import {} from "../../types/auth.type";
// import { tagTypes } from "../tag.types";

// const profileApi = victoriaBaseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     adminProfile: builder.query({
//       query: () => ({
//         url: `/admin`,
//         method: "GET",
//       }),
//       providesTags: ["adminInfo"],
//     }),
//     editProfile: builder.mutation({
//       query: (userInfo: FormData) => ({
//         url: "/overview/update-admin",
//         method: "PUT",
//         body: userInfo,
//       }),
//       invalidatesTags: ["adminInfo"],
//     }),
//   }),
// });

// export const { useAdminProfileQuery, useEditProfileMutation } = profileApi;
