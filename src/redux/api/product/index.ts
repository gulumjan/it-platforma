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
    getMasterClass: build.query<
      PRODUCT.GetMasterClassResponse,
      PRODUCT.GetMasterClassRequest
    >({
      query: () => ({
        url: "/masterclass/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getMasterClassDetail: build.query<
      PRODUCT.GetMasterClassDetailResponse,
      PRODUCT.GetMasterClassDetailRequest
    >({
      query: (id) => ({
        url: `/masterclass/${id}/`,
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

    getStatyaDo: build.query<
      PRODUCT.GetStatyaDoResponse,
      PRODUCT.GetStatyaDoRequest
    >({
      query: (id) => ({
        url: `/statyado/${id}`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),

    getStatyaAfter: build.query<
      PRODUCT.GetStatyaAfterResponse,
      PRODUCT.GetStatyaAfterRequest
    >({
      query: (id) => ({
        url: `/statyado/${id}`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),

    getFeedback: build.query<
      PRODUCT.GetFeedbackResponse,
      PRODUCT.GetFeedbackRequest
    >({
      query: (id) => ({
        url: `/feedback_list/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
  }),
});

export const {
  useGetCoursQuery,
  useGetStatyaQuery,
  useGetCoursDetailQuery,
  useGetMasterClassQuery,
  useGetStatyaDoQuery,
  useGetFeedbackQuery,
  useGetMasterClassDetailQuery,
} = api;
