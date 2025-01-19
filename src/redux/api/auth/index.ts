import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<
      AUTH.RegisterUserResponse,
      AUTH.RegisterUserRequest
    >({
      query: (data) => ({
        url: "/api/auth/register/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    loginUser: build.mutation<AUTH.LoginUserResponse, AUTH.LoginUserRequest>({
      query: (data) => ({
        url: "/api/auth/login/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = api;
