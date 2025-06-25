import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";



// // filterReducer-export default filterSlice.reducer; это вот это
// filter-  name:"filter",это вот это из файла FilterSlice

export const store = configureStore({
  reducer: {
filter:filterReducer

  },
});


