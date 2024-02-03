import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPlayMovievideo } from "../utils/movieSlice";

const useMovieVideo = (movieID)=>{
    
const dispatch= useDispatch();

    const getMovieVideo= async()=>{
const data= await fetch("https://api.themoviedb.org/3/movie/" +movieID +"/videos?language=en-US", API_OPTIONS)

const json =await data.json();
const filterdata=json.results.filter((video)=>video.type ==="Trailer");
const trailer =filterdata.length ? filterdata[0]:json.results[0];

dispatch( addPlayMovievideo(trailer ));
    }

useEffect(()=>{
    getMovieVideo();
},[])

}

export  default useMovieVideo;
