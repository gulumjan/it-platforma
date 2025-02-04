import { useLanguageStore } from "@/stores/UseLanguageStore";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const dynamicBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const language = useLanguageStore.getState().language || "en"; // Дефолтный язык

  const baseUrl = `${process.env.NEXT_PUBLIC_URL}/${language}`;

  const fetchBaseQueryWithLanguage = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const tokens = localStorage.getItem("tokens");

      if (tokens) {
        try {
          const parsedTokens = JSON.parse(tokens);
          const accessToken = parsedTokens?.tokens?.access;

          if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
          }
        } catch (error) {
          console.error("Ошибка парсинга токенов:", error);
        }
      }

      return headers;
    },
  });

  return fetchBaseQueryWithLanguage(args, api, extraOptions);
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: dynamicBaseQuery,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  tagTypes: ["data"],
  endpoints: (builder) => ({
    getPublicData: builder.query({
      query: () => "/public-endpoint",
    }),
    getPrivateData: builder.query({
      query: () => "/private-endpoint",
    }),
  }),
});
