import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items :[],
    },
    reducers:{
        // mutating the state , modifying the state directly 
        addItem : (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state,action)=>{
            // state.items.pop();
            state.items = state.items.filter(item => item.id !== action.payload);

        },
        clearCart : (state)=>{
            state.items.length = 0;
        }
    }
})


// exporting actions 
export const {addItem, removeItem , clearCart} = cartSlice.actions;

// exporting reducer
export default cartSlice.reducer;