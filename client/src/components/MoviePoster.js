import React, { useState, useEffect, useContext } from 'react';
import { FavoriteMoviesContext } from '../context/FavoriteMoviesContext';

import './MoviePoster.css';

export const BASE_URL = 'https://image.tmdb.org/t/p/original';

const MoviePoster = ({ movie, openTrailerWindow }) => {
  const { favoriteMovies, addToFavorites, removeFromFavorites } = useContext(FavoriteMoviesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToFavorites = () => {
    setIsFavorite(true);
    addToFavorites(movie);
  };

  const handleRemoveFromFavorites = () => {
    setIsFavorite(false);
    removeFromFavorites(movie);
  };

  useEffect(() => {
    const updateIsFavorite = () => {
      if (favoriteMovies && movie && favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id)) {
        setIsFavorite(true);
      }
    };
    updateIsFavorite();
  }, [favoriteMovies, movie]);

  return (
    <div
      className="movie-poster"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Display the movie poster */}
      <img
        key={movie.id}
        onClick={() => openTrailerWindow(movie)}
        src={`${BASE_URL}${movie.poster_path}`}
        alt={movie.name}
      />
      {/* Display movie title and genres */}
      {isHovered && (
        <div className="movie-info">
          <h3 className="movie-title">{movie.title}</h3>
          <div className="movie-genres">
            {movie.genres.map((genre, index) => (
              <React.Fragment key={genre.id}>
                {index > 0 && <span className="genre-dot">•</span>}
                {genre.name}
              </React.Fragment>
            ))}
          </div>
          {/* Display the "add to favorite" button */}
          <div className="favorite-buttons">
            {isFavorite ? (
              <button onClick={handleRemoveFromFavorites} tooltip="Remove from favorites">-</button>
            ) : (
              <button onClick={handleAddToFavorites} tooltip="Add to favorites">+</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePoster;
