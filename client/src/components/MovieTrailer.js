import React from 'react';
import ReactPlayer from 'react-player';
import './MovieTrailer.css'

function MovieTrailer({movie, trailer, closeTrailerWindow, setMoreInfo}) {

  const onPlayerEnd = event => {
    event.target.playVideo(); // Restart the video when it ends
  }

  const cast = movie.credits.cast.map(actor => actor.name).slice(0, 6).map(actor => `${actor}`).join(", ");
  const genres = movie.genres.map(genre => genre.name).join(", ");

  const handleCloseTrailer = () => {
    closeTrailerWindow();
    if(setMoreInfo){
      setMoreInfo(false);
    }
  }

  return (
    <div className="trailer-window">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer?.key}`}
        className="youtube-trailer"
        width="100%"
        height="100%"
        playing
        controls={false}
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              rel: 0,
              iv_load_policy: 0,
              modestbranding: 1,
              origin: window.location.origin
            },
          },
        }}
        onEnded={onPlayerEnd}
      />
      <button className="x-button" onClick={handleCloseTrailer}><span className="close-icon">X</span></button>
      <h2 className="trailer-title"> {movie.original_title} </h2>
      <h4 className="trailer-year"> {movie.release_date.split("-")[0]} </h4>
      <p className="trailer-overview"> {movie.overview} </p>
      <h4 className="trailer-genres"> <div className='trailer-genres-title'> Genres: </div> {genres}</h4>
      <h4 className="trailer-cast"> <div className='trailer-cast-title'> Cast: </div> {cast}</h4>
  </div>
  )
}

export default MovieTrailer;