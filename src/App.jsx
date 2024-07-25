import {useEffect, useState} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=f91f977d"


export default function App() {
const [movies, setMovies] = useState([])
const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
}
    useEffect(() => {
        searchMovie("iron man")
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

        {movies?.length > 0
            ?(
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found :/</h2>
                </div>
            )
        }

    </div>
)
}