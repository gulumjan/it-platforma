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
        url: "/password-reset/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    changePassword: build.mutation<
      AUTH.ChangePasswordResponse,
      AUTH.ChangePasswordRequest
    >({
      query: (data) => ({
        url: "/password-reset/confirm/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    newPassword: build.mutation<
      AUTH.NewPasswordResponse,
      AUTH.NewPasswordRequest
    >({
      query: ({ password, token }) => ({
        url: `/reset-password-confirm/${token}`,
        method: "POST",
        body: password,
      }),
      invalidatesTags: ["data"],
    }),
    logoutUser: build.mutation<AUTH.LogoutUserResponse, AUTH.LogoutUserRequest>(
      {
        query: (data) => ({
          url: "/logout/",
          method: "POST",
          body: data,
          headers: {
            Authorization: `Bearer ${data.access}`,
          },
        }),
        invalidatesTags: ["data"],
      }
    ),
  }),
  overrideExisting: true,
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useGetUserQuery,
  useLogoutUserMutation,
  useNewPasswordMutation,
  useChangePasswordMutation,
} = api;
