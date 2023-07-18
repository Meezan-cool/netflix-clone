import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from '../../API/axios';
import './Row.css';
function Row({ title, fetchURL,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const basicUrl = "//image.tmdb.org/t/p/original";
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
      // console.log(request);
    }
    fetchData();
  }, [fetchURL])
  // console.log(movies);

  const opts = {
    height:'390',
    width:'100%',
    playerVars:{
      // https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };

  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl('');
    }
    else{
      movieTrailer(movie.name||"")
      .then((url)=>{
        const urlPrams =  new URLSearchParams (new URL(url).search);
       setTrailerUrl (urlPrams.get('v'));

      })
      .catch((error)=>console.log(error));

    }
  }

  
  return (
    <div  className='row'>
      <h1 >{title}</h1>
      <div className={ `row_posters`}>
        {movies.map((movie) =>
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${basicUrl}${ isLargeRow ? movie.poster_path:movie.backdrop_path }`} alt={movie.name} className={ `row_poster ${isLargeRow && 'Large_row_poster'}`} />
        )}
      </div>
     { trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}
export default Row