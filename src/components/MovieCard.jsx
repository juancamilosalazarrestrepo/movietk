import { Link } from "react-router-dom";
import React from 'react';
import styles from "./MovieCard.module.css";
import './MovieCard.css';


export function MovieCard({movie}){
    
    const imageUrl = "https://image.tmdb.org/t/p/w300"+ movie.poster_path;
    return (
    <div className={styles.movieCardo} >
        <Link to={"/movies/"+ movie.id}>
        <img
        width={230}
        height={345} 
        className={styles.movieImage}
         src={imageUrl} 
         alt={movie.title}
         />
         <div >{movie.title}</div>
         </Link>
         
         </div>);
}