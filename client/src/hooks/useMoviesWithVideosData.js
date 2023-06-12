import { useState, useEffect, useCallback } from 'react';
import axios from "../helpers/axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const useMoviesWithVideosData = (fetchUrl, searchedMovie) => {
  const [movies, setMovies] = useState([]);
  const [currMovie, setCurrMovie] = useState({});
  const [currTrailer, setCurrTrailer] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

const fetchMovie = useCallback(async (movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        append_to_response: 'videos, credits',
      },
    });
    // Fetch credits separately
    const creditsResponse = await axios.get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    // Merge the credits data into the movie data
    data.credits = creditsResponse.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}, []);

  const fetchMovies = useCallback(async () => {
    const endpoint = searchedMovie? "search/movie" : fetchUrl;
    const {data} = await axios.get(endpoint, {
      params: {
        api_key: API_KEY,
        query: searchedMovie,
        }});
    if (data){
      let moviesWithVideos = await Promise.all(
        data.results.map(async (selectedMovie) => {
          const movie = await fetchMovie(selectedMovie.id);
          return movie;
        }));
      moviesWithVideos = moviesWithVideos.filter((element) => element !== undefined);
      const filteredMovies = moviesWithVideos.filter((movie) => movie.videos.results.length > 0);
      setMovies(filteredMovies);
    }
  }, [fetchUrl, fetchMovie, searchedMovie]);

  useEffect(() => {
      fetchMovies();
  }, [fetchMovies]);

  const openTrailerWindow = (selectedMovie) => {
    setCurrMovie(selectedMovie);
    setShowTrailer(true);
  };

  const closeTrailerWindow = () => {
    setShowTrailer(false);
    setCurrMovie({});
  };

  useEffect(() => {
    if (showTrailer && currMovie && Object.keys(currMovie).length !== 0) {
      const trailer =
        currMovie.videos.results.find((vid) => vid.name === 'Official Trailer') ||
        currMovie.videos.results.find((vid) => vid.name.includes('Official') && vid.name.includes('Trailer')) ||
        currMovie.videos.results.find((vid) => vid.name.includes('Trailer')) ||
        currMovie.videos.results.find((vid) => vid.name.includes('Official Teaser'));
      setCurrTrailer(trailer);
    } else {
      setCurrTrailer({});
    }
  }, [showTrailer, currMovie]);

  return {
    movies, currMovie, currTrailer, showTrailer, openTrailerWindow, closeTrailerWindow,
  };
};

export default useMoviesWithVideosData;
