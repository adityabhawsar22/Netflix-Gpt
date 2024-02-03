import React from "react";
import useMovieVideo from "../Hooks/useMovieVideo";
import { useSelector } from "react-redux";

const Videobackground = ({ movieId }) => {
    const trailervideo= useSelector((store)=>store.movie?.addPlayMovievideo)
  useMovieVideo(movieId);

  return (
    <div className="w-screen ">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailervideo?.key+"?&autoplay=1&mute=true"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
