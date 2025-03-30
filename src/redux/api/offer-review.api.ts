import { victoriaBaseApi } from "./index";
import { tagTypes } from "../tag.types";
import { OfferReviewType } from "../../types/offer-review";

type staticdataType = {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: OfferReviewType[];
};

const OfferReviewApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOffers: builder.query<
      { success: boolean; data: staticdataType },
      void
    >({
      query: () => ({
        url: "/advertise",
        method: "GET",
      }),
      providesTags: [tagTypes.advertise],
    }),
    deleteOffer: builder.mutation({
      query: (offerId) => ({
        url: `/advertise/${offerId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.advertise],
    }),
    approveOffer: builder.mutation({
      query: (offerId) => ({
        url: `/advertise/approve/${offerId}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.advertise],
    }),
    rejectOffer: builder.mutation({
      query: (offerId) => ({
        url: `/advertise/reject/${offerId}`,
        method: "PATCH",
      }),
      invalidatesTags: [tagTypes.advertise],
    }),
  }),
});

export const {
  useGetAllOffersQuery,
  useRejectOfferMutation,
  useApproveOfferMutation,
} = OfferReviewApi;
