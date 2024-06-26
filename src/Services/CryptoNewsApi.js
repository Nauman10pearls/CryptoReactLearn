import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const crytpoNewsHeader = {
  "x-rapidapi-key": "24663cacf7msh167670540692bd4p1250c5jsn15803b39ea92",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "X-BingApis-SDK": "true",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

function createRequest(url) {
  return {
    url,
    headers: crytpoNewsHeader,
  };
}

export const CryptoNewsApi = createApi({
  reducerPath: "CryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    GetCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = CryptoNewsApi;
