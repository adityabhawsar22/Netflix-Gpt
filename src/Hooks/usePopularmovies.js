import{ useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovie } from '../utils/movieSlice';

const usePopularmovies = () => {
const dispatch= useDispatch();
    const popularmovies=async()=>{

const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
const json = await data.json();
dispatch(addPopularMovie(json.results));

    }

    useEffect(()=>{
        popularmovies();
    },[])


}

export default usePopularmovies