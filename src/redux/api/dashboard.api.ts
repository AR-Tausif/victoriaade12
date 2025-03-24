import { victoriaBaseApi } from ".";
const date = new Date();

const accountDetailsApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getChartData: builder.query({
      query: ({ year = date.getFullYear().toString() }: { year: string }) => ({
        url: `/overview/get-user-chart?year=${year}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetChartDataQuery } = accountDetailsApi;
