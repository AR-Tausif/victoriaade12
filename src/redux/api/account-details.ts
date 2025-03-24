import { victoriaBaseApi } from ".";
import { TProfileEdit } from "../../types/profile.type";

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
    }),
    sellerProfile: builder.query({
      query: (serllerProfileId) => ({
        url: `account-details/seller-profile/${serllerProfileId}`,
        method: "GET",
      }),
    }),
    sellerPost: builder.query({
      query: (sellerId) => ({
        url: `/account-details/seller-posts/${sellerId}`,
        method: "GET",
      }),
    }),
    editProfile: builder.mutation({
      query: (userInfo: TProfileEdit) => ({
        url: "/overview/update-admin",
        method: "PUT",
        body: userInfo,
      }),
    }),
  }),
});

export const { useUsersQuery, useSellerProfileQuery, useSellerPostQuery } =
  accountDetailsApi;
