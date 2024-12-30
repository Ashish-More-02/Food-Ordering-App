import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";

// the main store , have its own reducer which will contain small reducers from different slices
// one reducer for each slice

const appStore = configureStore({
  reducer: {
    cart : cartReducer,
  },
});


export default appStore;
