import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // {id,imageUrl,title,price,qty:3}
  items: [],
  // [
  //   {
  //     "id":"1",
  //     "title",
  //     "imageUrl",
  //     "price",
  //       totlaQty:10
  //     "details":[
  //       {
  //         "type":"0",
  //         "sizes":[{"size":"26","count":2},{"size":"30","count":1}]
  //       },
  //       {
  // "type":"1",
  // "sizes"[{"size":"26","count":3},{"size":"30","count":2}]
  //       }
  //     ]
  //   }
  // ]
  total: 0,
  count: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      // const id = action.payload.id;
      const { id, imageUrl, title, price, activeSize, activeType } =
        action.payload;
      const Itemsindex = state.items.findIndex((item) => item.id == id);

      if (Itemsindex == -1) {
        //  изначально пустая корзина
        const item = {
          id,
          imageUrl,
          title,
          price,
          totalQty: 1,
          details: [
            {
              //пицца c типом из activeType
              type: activeType,
              //с размером из usestate=>activeSize
              sizes: [{ size: activeSize, qty: 1 }],
            },
          ],
        };
        state.items.push(item);
        state.count = state.count + 1;
        state.total = state.total + price;
      } else {
        const detailsTypeInd = state.items[Itemsindex].details.findIndex(
          (el) => el.type == activeType
        );
        if (detailsTypeInd != -1) {
          const typeSizeInd = state.items[Itemsindex].details[
            detailsTypeInd
          ].sizes.findIndex((el) => el.size == activeSize);
          if (typeSizeInd != -1) {
            state.items[Itemsindex].details[detailsTypeInd].sizes[typeSizeInd]
              .qty++;
            state.items[Itemsindex].totalQty++;
            state.count = state.count + 1;
            state.total = state.total + price;
          } else {
            const sizeItem = {
              size: activeSize,
              qty: 1,
            };
            state.items[Itemsindex].details[detailsTypeInd].sizes.push(
              sizeItem
            );
            state.items[Itemsindex].totalQty++;
            state.count = state.count + 1;
            state.total = state.total + price;
          }
        } else {
          const detailsItem = {
            type: activeType,
            sizes: [
              {
                size: activeSize,
                qty: 1,
              },
            ],
          };
          state.items[Itemsindex].details.push(detailsItem);
          state.items[Itemsindex].totalQty++;
          state.count = state.count + 1;
          state.total = state.total + price;
        }
      }
      // state.count = state.items.reduce((count, item) => count + item.qty, 0);
    },
    deleteItem(state, action) {},
  },
});
export const { addItem, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
