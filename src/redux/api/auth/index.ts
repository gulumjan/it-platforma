import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<AUTH.GetUserResponse, AUTH.GetUserRequest>({
      query: () => ({
        url: `/user/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    registerUser: build.mutation<
      AUTH.RegisterUserResponse,
      AUTH.RegisterUserRequest
    >({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    loginUser: build.mutation<AUTH.LoginUserResponse, AUTH.LoginUserRequest>({
      query: (data) => ({
        url: "/login/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    forgotPassword: build.mutation<
      AUTH.ForgotPasswordResponse,
      AUTH.ForgotPasswordRequest
    >({
      query: (data) => ({
        url: "/reset-password/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
  }),
  overrideExisting: true,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useGetUserQuery,
} = api;
