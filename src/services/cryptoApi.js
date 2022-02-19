import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
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
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
});

export const {
    // yukarıdaki getCryptos ile aynı isimde olmalı, başında get sonunda Query olmalı isimlendirme önemli
    // böylelikle redux hooku kendi ayarlıyor
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;