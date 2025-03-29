import { victoriaBaseApi } from ".";

const notificationApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotification: builder.query({
      query: () => ({
        url: `/notification`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllNotificationQuery } = notificationApi;
