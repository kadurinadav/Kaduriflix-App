import React from 'react'
import MovieTrailer from './MovieTrailer';
import MoviePoster from './MoviePoster';
import useMoviesWithVideosData from '../hooks/useMoviesWithVideosData';
import './Row.css';


function Row({ title, fetchUrl, searchedMovie, genre, notHomePage, favoriteMovies}) {
    const {movies, currMovie, currTrailer, showTrailer, openTrailerWindow, closeTrailerWindow} = useMoviesWithVideosData(fetchUrl, searchedMovie);
    const movieList = favoriteMovies ? favoriteMovies : movies;

  return (
    <div className={`row ${notHomePage ? 'search-page-row' : ''}`}>
      <h2 className="row-title">{title}</h2>
      <div className="movie-posters">
        {(genre ? movieList.slice(0, 10) : movieList).map((movie, index) => <MoviePoster
          key={`${movie.id}-${index}`}
          movie={movie}
          openTrailerWindow = {openTrailerWindow}
        />)}
        {showTrailer && currTrailer && (<MovieTrailer movie = {currMovie} trailer={currTrailer} closeTrailerWindow={closeTrailerWindow} />)}
      </div>
    </div>
  );
}

export default Row;
