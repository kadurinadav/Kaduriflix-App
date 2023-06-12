import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Banner.css';

function BannerMovieTrailer({ trailer, onTrailerEnd }) {
  const [showFade, setShowFade] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setShowFade(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector('.banner');
      const rect = banner.getBoundingClientRect();
      const visibilityThreshold = 0.5; 

      const isVisible = rect.top >= -rect.height * visibilityThreshold && 
      rect.bottom <= window.innerHeight + rect.height * visibilityThreshold;

      setIsMuted(!isVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTrailerEnd = () => {
    setShowFade(false);
    onTrailerEnd();
  };

  return (
    <div className={`trailer-container ${isMuted ? 'muted' : ''}`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailer?.key}`}
        className="youtube-container"
        width="100%"
        height="115vh"
        playing
        muted={isMuted}
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
        onEnded={handleTrailerEnd}
      />
      {showFade && <div className="youtube-fade"></div>}
    </div>
  );
}

export default BannerMovieTrailer;
