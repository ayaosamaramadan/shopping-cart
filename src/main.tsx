import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import theproduct from "./features/productSlice";
import { fetchedata } from "./features/productSlice";
import addtocart from "./features/cartSlice";
import { productApi } from "./features/prodectapi";
import author from "./features/autho";
const store = configureStore({
  reducer: {
    theproduct: theproduct,
    cart : addtocart,
    auth: author,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware);
  },
}
);

store.dispatch(fetchedata());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

   export type RootState = ReturnType<typeof store.getState>;
   export type AppDispatch = typeof store.dispatch;
