import { victoriaBaseApi } from ".";
import { TCreateServiceBody } from "../../types/service";
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
      query: (serviceInfo: TCreateServiceBody) => ({
        url: "/category/create",
        method: "POST",
        body: serviceInfo,
      }),
    }),
    deleteServiceById: builder.mutation({
      query: (serviceId: string) => ({
        url: `/category/${serviceId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.category],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateServiceMutation,
  useDeleteServiceByIdMutation,
} = derviceCategory;
