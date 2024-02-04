import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const Secondarycontainer = () => {

  const movie= useSelector((store)=>store.movie);
 
  return (
    <div className="bg-black ">
      <div className="-mt-48 pl-12 z-20 relative">
        <MovieList title={"Now Playing"} mov = {movie.nowplayingmovie}/>
        <MovieList title={"Top Rated"} mov = {movie.Toprated}/>

        <MovieList title={"Popular"} mov = {movie.PopularMovie}/>
        <MovieList title={"Upcoming"} mov = {movie.Upcoming}/>
        </div>

    </div>
  )
}

export default Secondarycontainer