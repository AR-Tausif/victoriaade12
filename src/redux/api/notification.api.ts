import { victoriaBaseApi } from ".";
import { tagTypes } from "../tag.types";

const notificationApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotification: builder.query({
      query: () => ({
        url: `/notification`,
        method: "GET",
      }),
      providesTags: [tagTypes.notification],
    }),
    readNotification: builder.mutation({
      query: (notificationId: string) => ({
        url: `/notification/make-read?notId=${notificationId}`,
        method: "PUT",
      }),
      invalidatesTags: [tagTypes.notification],
    }),
  }),
});

export const { useGetAllNotificationQuery, useReadNotificationMutation } =
  notificationApi;
