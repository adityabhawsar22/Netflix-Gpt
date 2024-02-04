import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addnowplayingmovie } from "../utils/movieSlice";

const useNowPlaying = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();


  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addnowplayingmovie(json.results));
  };

  useEffect(() => {
      getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;