
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
    getCoursDetail: build.query<
      PRODUCT.GetCourseDetailResponse,
      PRODUCT.GetCourseDetailRequest
    >({
      query: (id) => ({
        url: `/cours/${id}`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getStatya: build.query<
      PRODUCT.GetStatyasResponse,
      PRODUCT.GetStatyaRequest
    >({
      query: () => ({
        url: "/statya/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),

    getStatyaDo: build.query<PRODUCT.GetStatyaDoResponse, PRODUCT.GetStatyaDoRequest>({
      query:(id)=>({
        url:`/statyado/${id}`,
        method:"GET",
      }),
      providesTags:["data"]
    }),

    getStatyaAfter: build.query<PRODUCT.GetStatyaAfterResponse, PRODUCT.GetStatyaAfterRequest>({
      query:(id)=>({
        url:`/statyado/${id}`,
        method:"GET",
      }),
      providesTags:["data"]
    }),

  }),
});


export const { useGetCoursQuery, useGetStatyaQuery, useGetCoursDetailQuery,useGetStatyaAfterQuery,useGetStatyaDoQuery } =
  api;

