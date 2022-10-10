import React, { useEffect, useState } from 'react';
import './rows.css'
import instance from '../../lib/axios';
import Loader from '../Loader';

const Rows = ({title, fetchUrls, isLarge}) => {
    const [movies, setMovies]=useState([])
 
    const baseUrl='https://image.tmdb.org/t/p/original/'
  
    useEffect(()=>{
        async function fetchMovies(){
            const request=await instance.get(fetchUrls)
          setMovies(request.data.results)
            return request
        }
        fetchMovies()
    },[fetchUrls])
   
    return (
        <div className='rows'>
            <h1 className='row_title'>{title}</h1>
            <div className='movie_row'>
            {
                movies.map((movie, i)=>
                ((isLarge && movie?.poster_path)||(!isLarge && movie?.backdrop_path)) &&
                <img className={`row_image ${isLarge && 'row_image_large'}`} src={`${baseUrl}${isLarge? movie?.poster_path: movie?.backdrop_path}`} alt={movie?.name} key={movie.name}/>
                )
            }
            </div>
        </div>
    );
};

export default Rows;