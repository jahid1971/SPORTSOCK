import { baseApi } from "@/redux/api/baseApi";
import { createApiBuilder, queryApiBuilder } from "@/utls/api";

const saleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({


        createSale: builder.mutation({
            query: createApiBuilder("sales/create-sale"),
            invalidatesTags: ["sales","products"],
        }),
        getSalesData: builder.query({
            query: queryApiBuilder("sales"),
            providesTags: ["sales"],
        }),
        getSalesHistory: builder.query({
            query: queryApiBuilder("sales/sales-history"),
            providesTags: ["sales"],
        })
    }),
});

export const { useCreateSaleMutation,useGetSalesDataQuery,useGetSalesHistoryQuery } = saleApi;
