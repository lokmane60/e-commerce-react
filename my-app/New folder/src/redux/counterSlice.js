import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'product',
    initialState:{
        prod :[77]
    },
    reducers: {
        selProduct: (state)=>state.product,
        //decrement : (state)=>state.value -=1,
    }
    
})


export const {selProduct} = counterSlice.actions

export default counterSlice.reducer