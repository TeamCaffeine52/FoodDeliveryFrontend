import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const categorySlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		loadCategory: (state, action) => {
			return action.payload;
		},
	},
});

export const {
	loadCategory
} = categorySlice.actions;

export default categorySlice.reducer;