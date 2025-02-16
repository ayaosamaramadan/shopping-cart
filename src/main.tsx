import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import theproduct from "./features/theproduct";
import { fetchedata } from "./features/theproduct";
import { productApi } from "./features/prodectapi";
const store = configureStore({
  reducer: {
    theproduct: theproduct,
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
