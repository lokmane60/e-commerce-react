import { createSlice} from "@reduxjs/toolkit";

const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]

export const postsSlice = createSlice({
    name : 'posts',
    initialState:{
        isValid:false,
        items: [],
        cart:cart,
        
        
    },
    reducers:{
        SetProducts: function(state,action){
            
            state.items=action.payload
           
            localStorage.setItem('products',JSON.stringify(state.items.map(item=>item)) )
        },
        
        AddToCart: function(state,action){
            
            state.cart.push(action.payload)
            
            localStorage.setItem('cart',JSON.stringify(state.cart.map(item=>item)) )
        },
        validUser: function (state,action){
            state.isValid =true
        },
        deletePost: function(state,action){
            
            state.items = state.items.filter(items=>items.id !==action.payload.id)
        }
        
    }
})

//localStorage.setItem('products',JSON.stringify(state.items).map(item=>item) )

export const {SetProducts,validUser,SelProduct,AddToCart, deletePost} = postsSlice.actions
export default postsSlice.reducer