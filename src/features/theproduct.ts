import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface ProductState {
    items: Product[];
    status: "idle" |"loading" | "succeeded"| "failed";
}

const initialState: ProductState = {
    items: [],
    status: "idle",
};

export const fetchedata = createAsyncThunk<Product[]>(
    "product/fetchedata",
    async () => {
        const response = await axios.get("http://localhost:4000/product"); return response.data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState ,
    reducers: {},
    extraReducers: (builder) => {
        builder .addCase(fetchedata.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchedata.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.items = action.payload;
                 state.status = "succeeded";
            })
            .addCase(fetchedata.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default productSlice.reducer;
