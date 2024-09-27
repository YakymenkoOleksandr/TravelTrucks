import { configureStore } from "@reduxjs/toolkit";
import vansReducer from "./vansSlice";

export const store = configureStore({
  reducer: {
    vans: vansReducer,
  },
});