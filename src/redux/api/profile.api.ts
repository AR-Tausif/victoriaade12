import { victoriaBaseApi } from ".";
import {} from "../../types/auth.type";
import { TProfileEdit } from "../../types/profile.type";
import { tagTypes } from "../tag.types";

const profileApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminProfile: builder.query({
      query: () => ({
        url: `/admin`,
        method: "GET",
      }),
      providesTags: [tagTypes.profile],
    }),
    editProfile: builder.mutation({
      query: (userInfo: TProfileEdit) => ({
        url: "/overview/update-admin",
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.profile],
    }),
  }),
});

export const { useAdminProfileQuery, useEditProfileMutation } = profileApi;
