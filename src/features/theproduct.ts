import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null
};
const theproductSlice = createSlice({
    name: "theproduct",
    initialState,
    reducers: {}
    });

export default theproductSlice.reducer;