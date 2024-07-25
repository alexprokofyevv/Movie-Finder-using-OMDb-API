import {React, useEffect, useState} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=f91f977d"


export default function App() {

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')
const handleKeyDown = (event) => {
    if(event.key=="Enter"){
        searchMovie(searchTerm)
    }
}
const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
    if(title.length > 0){
       document.getElementById("emptyLabel").innerHTML = "No result found!"
    }
    else if(title == "") {
        document.getElementById("emptyLabel").innerHTML = "Search for a movie!"
    }
}

useEffect(() => {
      document.getElementById("emptyLabel").innerHTML = "Search for a movie!"
},[])

return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
                type="text" 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}
                onKeyDown={handleKeyDown}
            />
            <img 
                src={SearchIcon} 
                alt="Search Icon"
                onClick={() => {
                    searchMovie(searchTerm)
                }} 
            />
        </div>

    {movies?.length > 0
        ?(
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                ))}
            </div>
        ) : (
            <div className="empty">
                <h2 id="emptyLabel"></h2>
            </div>
        )
    }
    </div>
)
}
