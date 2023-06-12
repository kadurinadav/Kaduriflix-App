import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteMoviesContext = createContext();

const FavoriteMoviesProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('')
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const addToFavorites = async (movie) => {
    const movieExists = favoriteMovies.some((favoriteMovie) => favoriteMovie.id === movie.id);
    if (!movieExists) {
      setFavoriteMovies((prevFavorites) => [...prevFavorites, movie]);
  
      try {
        await axios.post('http://localhost:3001/users/favorites', {
          email: userEmail,
          movie: movie,
          action: 'add'
        });
        console.log('Movie added to favorites successfully');
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  const removeFromFavorites = async (movie) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((favoriteMovie) => favoriteMovie.id !== movie.id)
    );
  
    try {
      await axios.post('http://localhost:3001/users/favorites', {
        email: userEmail,
        movie: movie,
        action: 'remove'
      });
      console.log('Movie removed from favorites successfully');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/favorites?email=${userEmail}`);
        const { success, favorites } = response.data;
        if (success) {
          setFavoriteMovies(favorites);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    if (userEmail) {
      fetchFavorites();
    }
  }, [userEmail]);

  return (
    <FavoriteMoviesContext.Provider value={{ favoriteMovies, userEmail, setUserEmail, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteMoviesContext.Provider>
  );
};

export { FavoriteMoviesContext, FavoriteMoviesProvider };
