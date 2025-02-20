import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),
  endpoints: (builder) => ({
    fetchAllProducts: builder.query<Product[], void>({
      query: () => "/product",
    }),
  }),
});

export const { useFetchAllProductsQuery } = productApi;
