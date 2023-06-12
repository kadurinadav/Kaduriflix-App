import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../helpers/requests';

function HomePage() {

  const [showNavbarBackground, setShowNavbarBackground] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollToTop();
  }, []);

  return (
    <div>
      <Navbar showBackground={showNavbarBackground} />
      <Banner fetchUrl={requests.TrendingMovies} 
      onPlayTrailer={() => {setShowNavbarBackground(true)}} onCloseBanner={() => {setShowNavbarBackground(false)}}/>
      <Row title="Trending on Kaduriflix" fetchUrl={requests.TrendingMovies}/>
      <Row title="Action Movies" fetchUrl={requests.ActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.ComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.HorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.RomanticMovies}/>
      <Row title ="Drama Movies" fetchUrl = {requests.DramaMovies}/>
      <Row title ="Animation Movies" fetchUrl = {requests.AnimationMovies}/>
      <Row title ="Thriller Movies" fetchUrl = {requests.ThrillerMovies}/>
      <Row title ="Disney Movies" fetchUrl = {requests.DisneyMovies}/>
      <Row title ="Documantary Movies" fetchUrl = {requests.DocumentaryMovies}/>
      <Row title ="Family Movies" fetchUrl = {requests.FamilyMovies}/>
    </div>
  );
}

export default HomePage;