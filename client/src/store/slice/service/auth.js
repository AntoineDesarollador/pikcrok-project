import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth = createApi({
    reducerPath: "auth",

    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (payload) => ({
                url: "/admin/signin",
                method: "post",
                body: payload,
            }),
        }),
    }),
});

export const {
    useLoginMutation,
} = auth;