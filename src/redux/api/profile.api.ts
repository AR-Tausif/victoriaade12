import { victoriaBaseApi } from ".";
import {} from "../../types/auth.type";
import { TProfileEdit } from "../../types/profile.type";

const profileApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    editProfile: builder.mutation({
      query: (userInfo: TProfileEdit) => ({
        url: "/overview/update-admin",
        method: "PUT",
        body: userInfo,
      }),
    }),
  }),
});

export const { useEditProfileMutation } = profileApi;
