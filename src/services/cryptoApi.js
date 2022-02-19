import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '71bd949779mshdef02ead95339a8p14dc1cjsn41ceb8e4ca82'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
const createRequestWithParams = (url, timePeriod) => ({ url, headers: cryptoApiHeaders, params: { timePeriod: timePeriod } })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequestWithParams(`/coin/${coinId}/history`, timePeriod)
        })
    })
});

export const {
    // yukarıdaki getCryptos ile aynı isimde olmalı, başında get sonunda Query olmalı isimlendirme önemli
    // böylelikle redux hooku kendi ayarlıyor
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': '71bd949779mshdef02ead95339a8p14dc1cjsn41ceb8e4ca82'
//     }
//   };
