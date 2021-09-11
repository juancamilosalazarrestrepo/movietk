import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import { get } from "../utils/httpClient";
/* import movie from "./movie.json"; */
import styles from "./MovieDetails.module.css"


export function MovieDetails() {
    const {movieId} = useParams();
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState(null);

    

    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then(data =>{
            
            setMovie(data);
            setIsLoading(false);
        })
    },[movieId]);

    if (isLoading){
        return <Spinner/> 
    }

 

    


    const imageUrl = "https://image.tmdb.org/t/p/w500"+ movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img 
        className={`${styles.col} ${styles.movieImage}`} 
        src={imageUrl} 
        alt={movie.title}
         />
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                
                <strong>Titulo: </strong>: {movie.title}</p>
            <p>Descripcion: {movie.overview}</p>
            <p>
                <strong>Generos: </strong>
                {movie.genres.map(genre=>genre.name).join(", ")}
            </p>


        </div>
    </div>
}