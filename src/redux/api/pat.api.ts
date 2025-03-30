import { victoriaBaseApi } from "./index";
import { tagTypes } from "../tag.types";

type staticdataType = {
  id: string;
  body: string;
};

const patApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTerms: builder.mutation({
      query: (termsBody: { body: string }) => ({
        url: "/pat/create-terms",
        method: "PUT",
        body: termsBody,
      }),
      invalidatesTags: [tagTypes.terms],
    }),

    createPrivacy: builder.mutation({
      query: (privacyBody: { body: string }) => ({
        url: "/pat/create-privacy",
        method: "PUT",
        body: privacyBody,
      }),
      invalidatesTags: [tagTypes.privacy],
    }),

    getPrivacy: builder.query<{ success: boolean; data: staticdataType }, void>(
      {
        query: () => ({
          url: "/pat/privacy",
          method: "GET",
        }),
        providesTags: [tagTypes.privacy],
      }
    ),
  }),
});

export const {
  useCreateTermsMutation,
  useCreatePrivacyMutation,
  useGetPrivacyQuery,
} = patApi;
