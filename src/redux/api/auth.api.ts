import { victoriaBaseApi } from ".";
import {
  TForgetPassword,
  TLoginBody,
  TResetPassword,
} from "../../types/auth.type";

const authApi = victoriaBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo: TLoginBody) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    resetPassword: builder.mutation({
      query: (userInfo: TResetPassword) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: userInfo,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (emailInfo: TForgetPassword) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: emailInfo,
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

export const {
  useLoginMutation,
  useResetPasswordMutation,
  useForgetPasswordMutation,
} = authApi;
