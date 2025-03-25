import { victoriaBaseApi } from ".";
import { TCreateServiceBody } from "../../types/service";

const derviceCategory = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
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
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useCreateServiceMutation,
  useDeleteServiceByIdMutation,
} = derviceCategory;
