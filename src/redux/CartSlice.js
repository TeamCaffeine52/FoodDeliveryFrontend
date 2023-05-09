import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    deliveryAddress: "",
    contactNumber: "",
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const check = state.items.some((el) => el.productId === action.payload._id);
            if (check) {
                toast("Already Item in Cart");
            } else {
                const total = action.payload.price;
                state.items.push({ 
                    productId : action.payload._id,  // product id
                    purchasedQuantity: 1,
                });
            }
        },
        deleteCartItem: (state, action) => {
            toast("One Item Delete");
            const index = state.items.findIndex((el) => el.productId === action.payload._id);
            state.items.splice(index, 1);
        },
        increasePurchasedQuantity: (state, action) => {
            const index = state.items.findIndex((el) => el.productId === action.payload._id);
            state.items[index].purchasedQuantity = ++state.items[index].purchasedQuantity;
        },
        decreasePurchasedQuantity: (state, action) => {
            const index = state.items.findIndex((el) => el.productId === action.payload._id);
            let purchasedQuantity = state.items[index].purchasedQuantity;
            if (purchasedQuantity > 1) {
                const updatedPurchasedQuantity = --purchasedQuantity;
                state.items[index].purchasedQuantity = updatedPurchasedQuantity;
            }
        },
    },
});

export const {
  addCartItem,
  deleteCartItem,
  increasePurchasedQuantity,
  decreasePurchasedQuantity,
} = cartSlice.actions;

export default cartSlice;