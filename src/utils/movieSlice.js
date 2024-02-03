import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {

        name:"movies",
       initialState:{
        nowplayingmovie:null,
        addPlayMovievideo:null,
       },

       reducers:{

        addnowplayingmovie:(state,action)=>{

            state.nowplayingmovie=action.payload;
        },

        addPlayMovievideo :(state,action)=>{
            state.addPlayMovievideo=action.payload;
        }

       },
    },
);


export const {addnowplayingmovie,addPlayMovievideo}=movieSlice.actions;
export default movieSlice.reducer;