import { useSelector } from "react-redux"
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";


const Maincontainer = () => {
    
   const movies= useSelector((store)=>store.movie?.nowplayingmovie);
   if(!movies) return ;
  const mainMovie=movies[Math.floor(Math.random()*20)];
// console.log(movies);
   const {original_title,overview,id}= mainMovie;
   
  return (
    <div>
        <Videotitle  title={original_title} overview={overview}/>
        <Videobackground movieId={id}/>

    </div>
  )
}

export default Maincontainer