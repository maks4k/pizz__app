import { createSlice } from "@reduxjs/toolkit";
// initialState-начаальное состояние в данном случае useState
// reducers-будет выполнять какие то действия и перезаписывать перменные initialState
// actions-это то что храниться в reducers
const initialState={
    category:0,
    sort:{
         type: 0,
    isUp: true,
    },
    search:""
}
const filterSlice=createSlice({
    name:"filter",
    initialState:initialState,
    reducers:{
        setCategory(state,actions){
            state.category=actions.payload;
        }
    }
})
export const{setCategory}=filterSlice.actions;
export default filterSlice.reducer;