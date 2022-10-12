import axios from "axios";
import React, { useEffect, useState } from "react";
import  instance from "../../lib/axios";
import requests from "../../lib/requests";
import Loader from "../Loader";
import "./banner.css";
const Banner = () => {
  const [movie, setMovie]=useState([])
 
  function shorten(string, n) {
   return string.length > n ? string.substring(0, n-1 ) + "..." : string;
  
  }
  useEffect(()=>{
async function  fetchMovie(){
  const movies=await  instance.get(requests.fetchNetflixOriginals)


  setMovie(
    movies.data.results[
    Math.floor(Math.random() * movies.data.results.length -1)]
  )

  return movies

}
fetchMovie()
  },[])
 
  return (
   <>
   {
    (movie?.backdrop_path && movie?.name && movie?.original_name) &&  <header
    className="banner"
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path && movie.backdrop_path}" )`,
      backgroundSize:'cover',
     
    }}
  >
    <div className="banner_contents">
      <h1 className="banner_title">{movie?.name || movie?.original_name}</h1>
      <button className="banner_button">Play</button>
      <button className="banner_button">My list</button>
      <p className="banner_desc">
        {shorten(
          `${movie?.overview}`,
          150
        )}
      </p>
    </div>
      <div className="fade_button"></div>
  </header>
   }
   </>
  );
};

export default Banner;
