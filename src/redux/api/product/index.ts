import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCours: build.query<
      PRODUCT.GetCoursesResponse,
      PRODUCT.GetCoursesRequest
    >({
      query: () => ({
        url: "/cours/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
  }),
});

export const { useGetCoursQuery } = api;
