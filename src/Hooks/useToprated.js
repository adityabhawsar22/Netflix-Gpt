import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addToprated } from "../utils/movieSlice";
import { useEffect } from "react";

const useToprated = () => {
const dispatch= useDispatch();
    const gettoprated= async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
const  json= await data.json();

dispatch(addToprated(json.results));
    }



    useEffect(()=>{
        gettoprated();
    },[])
}

export default useToprated