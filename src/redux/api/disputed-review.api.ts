import { victoriaBaseApi } from ".";
import { tagTypes } from "../tag.types";

const disputedReview = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    allDisputedReviews: builder.query({
      query: () => ({
        url: `/dispute/all-disputes`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
    disputeResolve: builder.mutation({
      query: (reviewId: string) => ({
        url: `/dispute/resolve-as-remove/${reviewId}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.review],
    }),
    observeDisputed: builder.query({
      query: (reviewId: string) => ({
        url: `/dispute/observe/${reviewId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.review],
    }),
  }),
});

export const {
  useAllDisputedReviewsQuery,
  useDisputeResolveMutation,
  useObserveDisputedQuery,
} = disputedReview;
