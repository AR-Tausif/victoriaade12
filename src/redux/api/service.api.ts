import { victoriaBaseApi } from ".";
import { tagTypes } from "../tag.types";

const derviceCategory = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
      providesTags: [tagTypes.category],
    }),
    createService: builder.mutation({
      query: (serviceInfo: FormData) => ({
        url: "/category/create",
        method: "POST",
        body: serviceInfo,
      }),
      invalidatesTags: [tagTypes.category],
    }),
    deleteServiceById: builder.mutation({
      query: (serviceId: string) => ({
        url: `/category/${serviceId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
    updateServiceById: builder.mutation({
      query: ({
        serviceId,
        serviceInfo,
      }: {
        serviceId: string;
        serviceInfo: FormData;
      }) => ({
        url: `/category/update/${serviceId}`,
        method: "PUT",
        body: serviceInfo,
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateServiceMutation,
  useDeleteServiceByIdMutation,
  useUpdateServiceByIdMutation,
} = derviceCategory;
