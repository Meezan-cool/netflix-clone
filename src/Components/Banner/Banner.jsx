import React, {useState, useEffect } from 'react'
import axios from '../../API/axios'
import requests from '../../API/request'
import './Banner.css';


function Banner() {
    const [movie, setMovie] = useState([]);
   
    useEffect(()=>{
        async function fetchData(){
            const rqst= await axios.get(requests.fetchNetflixOriginals)
            // console.log(rqst);
            setMovie( rqst.data.results[

                Math.floor(Math.random() * rqst.data.results.length-1)
            ])

            // setMovie( rqst.data.results)
         return rqst;
        }
        fetchData()

    },[])
    // console.log(movie)
    
   

  return (
    <header className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url("//image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition:'center center',
    }}>
        <div className='banner_contents'>
      <h1 className='banner_title'>{movie?.title||movie?.name||movie?.original_name}</h1>
      <div className="banner_buttons">
      <button  className="banner_button">Play</button>
      <button  className="banner_button">My List</button>
      </div>
     <h3 className='banner_discription'>{movie?.overview}</h3>
        </div>
        <div className="banner_fadeBottom"/>
    </header>
  )
}

export default Banner