import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    deliveryAddress: {},
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addFormData: (state, action) => {
            return {
                ...state,
                deliveryAddress: {
                    ...state.deliveryAddress,
                    houseNo: action.payload.house,
                    street: action.payload.street,
                    landMark: action.payload.landmark,
                    pinCode: action.payload.pincode,
                    contactNumber: action.payload.contact,
                    isFilled: true,
                },
            };      
        },
        addCartItem: (state, action) => {
            const check = state.items.some((el) => el.productId === action.payload._id);
            if (check) {
                toast.error("Already Item in Cart");
            } else {
                state.items.push({ 
                    productId : action.payload._id,  // product id
                    purchasedQuantity: 1,
                });
            }
        },
        deleteCartItem: (state, action) => {
            toast.success("One Item removed from cart");
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
        emptyCart: (state, action) => {
            return {
                deliveryAddress : {},
                items : []
            }
        }
    },
});

export const {
    addFormData,
    addCartItem,
    deleteCartItem,
    increasePurchasedQuantity,
    decreasePurchasedQuantity,
    emptyCart,
} = cartSlice.actions;

export default cartSlice;