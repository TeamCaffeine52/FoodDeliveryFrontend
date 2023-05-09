import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		loadAllCategory: (state, action) => {
			return action.payload;
		},

		addCategory: (state, action) => {
			state.push(action.payload);
		},

		removeCategory: (state, action) => {
			state.slice(action.payload.index, 1);
		}
	},
});

export const {
	loadAllCategory,
	addCategory,
	removeCategory
} = categorySlice.actions;

export default categorySlice;