import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCours: build.query<
      PRODUCT.GetCoursesResponse,
      PRODUCT.GetCoursesRequest
    >({
      query: () => ({
        url: "/courses/",
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getCoursDetail: build.query<
      PRODUCT.GetCourseDetailResponse,
      PRODUCT.GetCourseDetailRequest
    >({
      query: (id) => ({
        url: `/courses/${id}`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getMasterClass: build.query<
      PRODUCT.GetMasterClassResponse,
      PRODUCT.GetMasterClassRequest
    >({
      query: () => ({
        url: "/master_class/",
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
        url: `/statya/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),

    getStatyaDo: build.query<
      PRODUCT.GetStatyaDoResponse,
      PRODUCT.GetStatyaDoRequest
    >({
      query: (id) => ({
        url: `/statya/${id}`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),


    getFeedback: build.query<
      PRODUCT.GetFeedbackResponse,
      PRODUCT.GetFeedbackRequest
    >({
      query: () => ({
        url: `/feedback_list/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getAboutUs: build.query<
      PRODUCT.GetAboutUsResponse,
      PRODUCT.GetAboutUsRequest
    >({
      query: () => ({
        url: `/about_us/`,
        method: "GET",
      }),
      providesTags: ["data"],
    }),
    getAboutSchool: build.query<
      PRODUCT.GetAboutSchoolResponse,
      PRODUCT.GetAboutSchoolRequest
    >({
      query: () => ({
        url: `/about_school/`,
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
  useGetAboutUsQuery,
  useGetAboutSchoolQuery,
} = api;
