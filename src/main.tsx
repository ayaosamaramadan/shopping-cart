import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import theproduct from "./features/theproduct";
import { fetchedata } from "./features/theproduct";
const store = configureStore({
  reducer: {
    theproduct: theproduct,
  },
});

store.dispatch(fetchedata());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
