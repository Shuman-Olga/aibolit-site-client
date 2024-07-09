import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  tagTypes: ["api"],
  endpoints: (build) => ({
    getAdvantages: build.query({
      query: () => "advantages",
    }),
    getOtzyvy: build.query({
      query: () => "otzyvy",
    }),
    getBlog: build.query({
      query: () => "blog",
    }),
    getControlling: build.query({
      query: () => "controlling",
    }),
    getPravoInfa: build.query({
      query: () => "pravoinfa",
    }),
    getSpravki: build.query({
      query: () => "spravki",
    }),
    getUslugi: build.query({
      query: () => "uslugi",
    }),
    getProgram: build.query({
      query: () => "program",
    }),
  }),
});

export const {
  useGetAdvantagesQuery,
  useGetOtzyvyQuery,
  useGetBlogQuery,
  useGetControllingQuery,
  useGetPravoInfaQuery,
  useGetUslugiQuery,
  useGetSpravkiQuery,
  useGetProgramQuery,
} = Api;
