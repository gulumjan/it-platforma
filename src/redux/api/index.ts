import { useLanguageStore } from "@/stores/UseLanguageStore";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const dynamicBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const language = useLanguageStore.getState().language;

  // Формирование базового URL с учетом языка
  const baseUrl = `${process.env.NEXT_PUBLIC_URL}/${language}`;

  // Конфигурация fetchBaseQuery
  const fetchBaseQueryWithLanguage = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const tokens = localStorage.getItem("tokens");
      console.log("🚀 ~ constdynamicBaseQuery:BaseQueryFn= ~ tokens:", tokens);
      const token = tokens ? JSON.parse(tokens).accessToken : null;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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
  endpoints: () => ({}),
});
