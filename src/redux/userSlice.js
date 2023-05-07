import {createSlice} from '@reduxjs/toolkit';

const initialState={}

export const userSlice=createSlice({
    name: "user",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            return action.payload;
        }
    }
})

export const {loginRedux} = userSlice.actions
export default userSlice.reducer