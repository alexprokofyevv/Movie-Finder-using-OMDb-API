import {useEffect, useState} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=f91f977d"

const movie1 = {
    "Title": "The Lego Batman Movie",
    "Year": "2017",
    "imdbID": "tt4116284",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
}

export default function App() {
const searchMovie = async (title) => {
    const [movies, setMovies] = useState()

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.Search)
}
    useEffect(() => {
        searchMovie("batman")
    }, [])
return(
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
                type="text" 
                placeholder="Search for movies" 
                onChange={() => {

                }}
            />
            <img 
                src={SearchIcon} 
                alt="Search Icon"
                onClick={() => {
                    
                }} 
            />
        </div>
        <div className="container">
                <MovieCard movie={movie1}/>
            </div>
    </div>
)
}