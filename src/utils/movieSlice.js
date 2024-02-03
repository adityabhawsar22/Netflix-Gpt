import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {

        name:"movies",
       initialState:{
        nowplayingmovie:null,
       },

       reducers:{

        addnowplayingmovie:(state,action)=>{

            state.nowplayingmovie=action.payload;
        },

       },
    },
);


export const {addnowplayingmovie}=movieSlice.actions;
export default movieSlice.reducer;