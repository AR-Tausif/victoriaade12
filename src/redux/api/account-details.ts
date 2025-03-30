import { victoriaBaseApi } from ".";
import { TProfileEdit } from "../../types/profile.type";
import { tagTypes } from "../tag.types";

const accountDetailsApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query({
      query: ({
        roleType,
        searchTerm,
      }: {
        searchTerm: string;
        roleType: string;
      }) => ({
        url: roleType
          ? `/account-details?searchTerm=${searchTerm}&role=${roleType}`
          : `/account-details?searchTerm=${searchTerm}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    sellerProfile: builder.query({
      query: (serllerProfileId) => ({
        url: `account-details/seller-profile/${serllerProfileId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user], // provide the users api with the user tag
    }),
    sellerPost: builder.query({
      query: (sellerId) => ({
        url: `/account-details/seller-posts/${sellerId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.post],
    }),
    deleteSellerPost: builder.mutation({
      query: (postId: string) => ({
        url: `/account-details/delete-post/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.post], // invalidate the users api after deleting a user
    }),
    editProfile: builder.mutation({
      query: (userInfo: TProfileEdit) => ({
        url: "/overview/update-admin",
        method: "PUT",
        body: userInfo,
      }),
      invalidatesTags: [tagTypes.user], // invalidate the users api after editing a user
    }),
    deleteProfile: builder.mutation({
      query: (accountId: string) => ({
        url: `/account-details/delete-user/${accountId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.user], // invalidate the users api after deleting a user
    }),
  }),
});

export const {
  useUsersQuery,
  useSellerProfileQuery,
  useSellerPostQuery,
  useDeleteSellerPostMutation,
  useDeleteProfileMutation,
} = accountDetailsApi;
