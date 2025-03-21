import { victoriaBaseApi } from ".";

type TLoginBody = {
  email: string;
  password: string;
  fcmToken: string;
};
const authApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo: TLoginBody) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // TODO: need to remove this endpoint
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
