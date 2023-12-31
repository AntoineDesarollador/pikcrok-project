import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import useToken from "./useToken";

export const crokApi = createApi({
    reducerPath: "crok",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000/",
        prepareHeaders: (headers) => {
            if (localStorage.getItem("token")) {
                headers.set("x-access-token", `${localStorage.getItem("token")}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCrokCategory: builder.query({
            async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
                const crokFetch = await fetchWithBQ("/crok");
                if (crokFetch.error) return { error: crokFetch.error };
                const crok = crokFetch.data;
                console.log(crokFetch)

                return { data: { crok } };
            },
            providesTags: ["crokPosted", "categoryPosted", "crokUpdated", "deletedCrok"],
        }),
        getCrokPackaging: builder.query({
            query: (id) => `crok/${id}`,
        }),
        addCrok: builder.mutation({
            query: (payload) => ({
                url: "/crok/upload",
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["crokPosted"],
        }),
        addCategory: builder.mutation({
            query: (payload) => ({
                url: "/category/add",
                method: "post",
                body: payload,
            }),
            invalidatesTags: ["categoryPosted"],
        }),
        
        updateCrok: builder.mutation({
            query: ({id, ...payload}) => ({
                url: `/crok/${id}`,
                method: "put",
                body: payload,
            }),
            invalidatesTags: ["crokUpdated"],

        }),
        deleteCrok: builder.mutation({
            query: (id) => ({
                url: `/crok/${id}`,
                method: "delete",
            }),
            invalidatesTags: ["deletedCrok"],
        }),
    }),
});

export const {
    useGetCrokCategoryQuery,
    useGetCrokPackagingQuery,
    useAddCrokMutation,
    useUpdateCrokMutation,
    useDeleteCrokMutation
} = crokApi;