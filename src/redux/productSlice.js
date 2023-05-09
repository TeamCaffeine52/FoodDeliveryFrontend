import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		loadProducts: (state, action) => {
			return action.payload;
		},
	},
});

export const {
	loadProducts
} = productSlice.actions;

export default productSlice.reducer;