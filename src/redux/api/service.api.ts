import { victoriaBaseApi } from ".";
import { tagTypes } from "../tag.types";

const serviceCategory = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (params?: { searchTerm?: string; createdAt?: string }) => {
        // Create URL params only for non-empty values
        const queryParams = new URLSearchParams();
        
        if (params?.searchTerm) {
          queryParams.append('searchTerm', params.searchTerm);
        }
        if (params?.createdAt) {
          queryParams.append('createdAt', params.createdAt);
        }

        const queryString = queryParams.toString();
        return {
          url: `/category${queryString ? `?${queryString}` : ''}`,
          method: "GET",
        };
      },
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
} = serviceCategory;
