import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  count: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id == id);

      if (index == -1) {
        //  изначально пустая корзина
        let qty = 0;
        const item = { id, qty: qty + 1 };
        state.items.push(item);
      } else {
        state.items[index].qty += 1;
      }
       state.count=state.items.reduce((count,item)=>
        count+item.qty
      ,0)
     
    },
    deleteItem(state, action) {},
  },
});
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
