import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import pizzasReducer from "./slices/pizzasSlice";



// // filterReducer-export default filterSlice.reducer; это вот это
// filter-  name:"filter",это вот это из файла FilterSlice

export const store = configureStore({
  reducer: {
filter:filterReducer,
cart:cartReducer,
pizzas:pizzasReducer
  },
});


