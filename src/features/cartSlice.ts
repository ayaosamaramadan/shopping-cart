import {PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

//   interface Product {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
// }

  
  interface CartState {
    items: CartItem[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
  }
  
const initialState:CartState ={
    items: [],
    status: "idle",
    error: null,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action: PayloadAction<CartItem>) {
            // const existingProduct = state.items.find(
            //     (item) => item.id === action.payload.id
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index >= 0) {
            state.items[index].quantity++;
        } else {
            const newItem = { ...action.payload, quantity: 1 };
            // state.items.push({ ...action.payload, quantity: 1 });
            state.items.push(newItem);
        }
    }
}
});



export const { addtocart } = cartSlice.actions;

export default cartSlice.reducer;