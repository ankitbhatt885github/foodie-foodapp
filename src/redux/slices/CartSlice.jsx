import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        //initially cart is empty
      cart: [],
    },
    reducers: {

        //if itemcard already exists so we need to increase the quantity of same item
        addToCart : (state,action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);

            //items remain as it is only quantity is increased by +1
            if (existingItem) {
                state.cart = state.cart.map((item) =>
                  item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                );
              } else {
                state.cart.push(action.payload);
              }
        },
        removeFromCart : (state,action) => {
            state.cart = state.cart.filter((item) => item.id  !== action.payload.id );
        }, 
        //to increment and decrement the value of quantity
        incrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            );
          },
          decrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            );
          },
    }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;