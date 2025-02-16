import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types/product';

// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
    endpoints: (builder) => ({
        fetchAllProducts: builder.query<Product[], void>({
            query: () => '/product',
        }),
    }),
});

export const { useFetchAllProductsQuery } = productApi;