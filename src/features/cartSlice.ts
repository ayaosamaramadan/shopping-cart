import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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

const initialState: CartState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [],
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart(state, action: PayloadAction<CartItem>) {
      // const existingProduct = state.items.find(
      //     (item) => item.id === action.payload.id
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
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
        toast.success("Item added to cart", {
          position: "bottom-right",
          autoClose: 2000,
          theme: "colore",
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removefromcart(state, action: PayloadAction<number>) {
      const data = localStorage.getItem("cart");

      if (data) {
        const index = state.items.findIndex((item) => item.id === action.payload);
        if (index >= 0) {
          state.items.splice(index, 1);
          toast.success("Item removed from cart", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "colore",
          });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decrem(state, action: PayloadAction<number>) {
      const data = localStorage.getItem("cart");
      if (data) {
        const index = state.items.findIndex((item) => item.id === action.payload);
        if (index >= 0) {
          state.items[index].quantity--;
          if (state.items[index].quantity === 0) {
            state.items.splice(index, 1);
          }
        }
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    }, 

    removeallincart(state){
        state.items = [];
        localStorage.removeItem("cart");
      }
  },
 
});

export const { addtocart, removefromcart, decrem ,removeallincart } = cartSlice.actions;

export default cartSlice.reducer;
