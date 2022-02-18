import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '71bd949779mshdef02ead95339a8p14dc1cjsn41ceb8e4ca82'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textformat=Raw&freshness=Day&count=${count}`)
        })
    })
});
export const {
    // yukarıdaki getCryptoNews ile aynı isimde olmalı, başında get sonunda Query olmalı isimlendirme önemli
    // böylelikle redux hooku kendi ayarlıyor
    useGetCryptoNewsQuery,
} = cryptoNewsApi;