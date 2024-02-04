import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice(
    {

        name:"movies",
       initialState:{
        nowplayingmovie:null,
        PopularMovie:null,
        PlayMovievideo:null,
        Toprated:null,
        Upcoming:null,
       },

       reducers:{

        addnowplayingmovie:(state,action)=>{

            state.nowplayingmovie=action.payload;
        },

        addPlayMovievideo :(state,action)=>{
            state.PlayMovievideo=action.payload;
        },

        addPopularMovie :(state,action)=>{
            state.PopularMovie=action.payload;
        },
       addToprated:(state,action)=>{
        state.Toprated=action.payload;
       },
       addupcoming:(state,action)=>{

        state.Upcoming=action.payload;
    },

       },
    },
);


export const {addnowplayingmovie,addPlayMovievideo,addPopularMovie,addToprated,addupcoming}=movieSlice.actions;
export default movieSlice.reducer;