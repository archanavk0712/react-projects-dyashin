import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const  dataSlice=createSlice({
    name:"data",
    initialState : initialState,
    reducers:{
        addData(state,action){
            state.push(action.payload)
        },
        deleteData(state,action){
            const deletIndex=action.payload;
           return  state.filter((data,ind)=>ind!=deletIndex)
        }
    }
})

export const{addData, deleteData}= dataSlice.actions
export default dataSlice.reducer