import React from "react";

export default function MovieCard({movie}) {
    return(
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img 
                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x444/2e2e2e/6e6e6e/?text=Missing+Poster"} 
                alt={movie.Title} 
            />
        </div>
        <div>
            <span>
                {movie.Type}
                <h3>{movie.Title}</h3>
            </span>
        </div>
    </div>
    )
}