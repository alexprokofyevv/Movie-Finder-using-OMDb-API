import React from "react";

export default function MovieCard({movie}) {
    return(
        <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img 
                src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x444?text=Movie+Poster"} 
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