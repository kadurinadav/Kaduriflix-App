import React, { useCallback, useEffect, useState } from 'react';
import useMoviesWithVideosData from '../hooks/useMoviesWithVideosData';
import BannerMovieTrailer from './BannerMovieTrailer';
import MovieTrailer from './MovieTrailer';

import './Banner.css';

export const BASE_URL = 'https://image.tmdb.org/t/p/original';

function Banner({ fetchUrl, onCloseBanner }) {
  const { movies, currMovie, currTrailer, showTrailer, openTrailerWindow, closeTrailerWindow } = useMoviesWithVideosData(fetchUrl);

  const [randomMovie, setRandomMovie] = useState({});
  const [trailerEnded, setTrailerEnded] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false)

  const fetchRandomMovie = useCallback(async () => {
    const randomInt = Math.floor(Math.random() * 20);
    setRandomMovie(movies[randomInt]);
  }, [movies]);

  useEffect(() => {
    fetchRandomMovie();
  }, [fetchRandomMovie]);

  useEffect(() => {
    if (randomMovie && Object.keys(randomMovie).length !== 0) {
      openTrailerWindow(randomMovie);
    }
  }, [randomMovie, openTrailerWindow]);

  useEffect(() => {
    if (trailerEnded) {
      setTrailerEnded(true);
    }
  }, [trailerEnded]);

  const handlePlayTrailer = () => {
    openTrailerWindow(randomMovie);
    setTrailerEnded(false)
  };

  const handleMoreInfo = () => {
    openTrailerWindow(currMovie? currMovie : randomMovie);
    setMoreInfo(true);
    setTrailerEnded(true);
  };

  return (
    <header className="banner" style={{background: trailerEnded && randomMovie?.poster_path
            ? `url(${BASE_URL}${randomMovie?.backdrop_path}) no-repeat top left / cover`: 'none'}}>
      <div className="banner-content">
        <h1 className="banner-title">{randomMovie?.title || randomMovie?.original_name || randomMovie?.name}</h1>
        <button className="play-button" onClick={handlePlayTrailer}> Play </button>
        <button className="info-button" onClick={handleMoreInfo} > More Info </button>
      </div>
      <div className="banner-fade"></div>
      {showTrailer && currTrailer && !trailerEnded && <BannerMovieTrailer trailer={currTrailer} onTrailerEnd={() => setTrailerEnded(true)} />}
      {showTrailer && currTrailer && moreInfo && (<MovieTrailer movie = {currMovie} trailer={currTrailer} closeTrailerWindow={closeTrailerWindow} setMoreInfo={setMoreInfo} setTrailerEnded={setTrailerEnded} />)}
    </header>
  );
}

export default Banner;
