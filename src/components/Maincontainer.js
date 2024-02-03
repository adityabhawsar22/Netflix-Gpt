import { useSelector } from "react-redux"
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";


const Maincontainer = () => {
    
   const movies= useSelector((store)=>store.movie?.nowplayingmovie);
   if(!movies) return ;
  const mainMovie=movies[1];
  console.log(mainMovie);
   const {original_title,overview}= mainMovie;
   
  return (
    <div>
        <Videotitle  title={original_title} overview={overview}/>
        <Videobackground/>

    </div>
  )
}

export default Maincontainer