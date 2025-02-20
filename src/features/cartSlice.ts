import {PayloadAction, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
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
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
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
            // toast.info("Item added to cart",{
            //     position: "top-right",
            //     // autoClose: 2000,
            // });

        } else {
            const newItem = { ...action.payload, quantity: 1 };
            // state.items.push({ ...action.payload, quantity: 1 });
            state.items.push(newItem);
            toast.success('Item added to cart', {
                position: 'bottom-right',
                autoClose: 2000,
                theme: 'colore',
              });
        }

        localStorage.setItem("cart", JSON.stringify(state.items));
    },
}
});



export const { addtocart } = cartSlice.actions;

export default cartSlice.reducer;