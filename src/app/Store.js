import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";
import LikeSlice from "./LikeSlice.js";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    like: LikeSlice,
  },
});

export default Store;
