import {counterSlice, createSlice} from "@reduxjs/toolkit";

const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]

export const postsSlice = createSlice({
    name : 'posts',
    initialState:{
        items: [],
        cart:cart
        
    },
    reducers:{
        SetProducts: function(state,action){
            //state.
            
            state.items=action.payload
            //console.log(state.items)
            localStorage.setItem('products',JSON.stringify(state.items.map(item=>item)) )
        },
        /*SelProduct: function(state,action){
            state.prd = state.items.filter(item=>item.id == action.payload)
            /*state.item={
                p:'ll'
            }
        },*/
        AddToCart: function(state,action){
            //console.log(state.cart)
            state.cart.push(action.payload)
            //localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)) )
            localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)) )
        },
        deletePost: function(state,action){
            
            state.items = state.items.filter(items=>items.id !==action.payload.id)
        }
        //localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)) )

    }
})

//localStorage.setItem('products',JSON.stringify(state.items).map(item=>item) )

export const {SetProducts,SelProduct,AddToCart, deletePost} = postsSlice.actions
export default postsSlice.reducer