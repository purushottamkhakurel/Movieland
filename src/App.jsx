import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './Search.svg';

// 268741fb

const API_URL = 'http://www.omdbapi.com?apikey=268741fb';
const movie = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm] = useState('')
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data =  await response.json();

    setMovies(data.Search)
  }

  useEffect(()=>{
    searchMovies();

  }, []);



  return (
   <div className='app'>
    <h1>MovieLand</h1>
    {/* search Division */}
    <div className='search'>
      <input type="text" placeholder="Search for Movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
      <img src={SearchIcon} alt="search" onClick={()=>searchMovies(searchTerm)} />
    </div>

    {
      movies?.length > 0 
      ? (<div className="container">
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
  
      </div>
      ):
      (<div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )
    }


{/* <MovieCard movie = {movie}/> */}
   
</div>
  )
}

export default App
