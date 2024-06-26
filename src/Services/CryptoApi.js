import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "24663cacf7msh167670540692bd4p1250c5jsn15803b39ea92",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

function createRequest(url) {
  return {
    url,
    headers: cryptoApiHeaders,
  };
}

export const CryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    GetCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    GetExchanges: builder.query({
      query: () => createRequest(`exchanges`),
    }),
    GetCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    GetCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history`, { timePeriod }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = CryptoApi;
