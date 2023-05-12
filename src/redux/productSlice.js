import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		loadAllProducts: (state, action) => {
			return action.payload;
		},

		addProduct: (state, action) => {
			state.push(action.payload);
		},

		removeProduct: (state, action) => {
			state.slice(action.payload.index, 1);
		},

		updateProductPrice: (state, action) => {
			state[action.payload.index].productPrice = action.payload.productPrice;
		},

		updateProductQuantity: (state, action) => {
			state[action.payload.index].productQuantity = action.payload.productQuantity;
		}
	},
});

export const {
	loadAllProducts,
	addProduct,
	removeProduct,
	updateProductPrice,
	updateProductQuantity
} = productSlice.actions;

export default productSlice;