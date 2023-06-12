import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../helpers/requests';

function GenrePage() {

  const {genre} = useParams();

  const [showNavbarBackground, setShowNavbarBackground] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollToTop();
  }, [genre]);

  return (
    <div>
      <Navbar showBackground={showNavbarBackground} />
      <Banner fetchUrl={requests[`top10${genre}Movies`]} 
      onPlayTrailer={() => {setShowNavbarBackground(true)}} onCloseBanner={() => {setShowNavbarBackground(false)}}/>
      <Row title={`Top 10 ${genre} Movies Today`} fetchUrl={requests[`top10${genre}Movies`]} genre = {true}></Row>
      {genre === 'Family' && (
        <>
          <Row title="Disney Movies" fetchUrl={requests.DisneyMovies}/>
          <Row title="Family Comedies Movies" fetchUrl={requests.FamilyComediesMovies}/>
          <Row title="Pixar Movies" fetchUrl={requests.PixarMovies} />
          <Row title="Family Action & Adventure Movies" fetchUrl={requests.FamilyActionMovies}/>
          <Row title="DreamWorks Movies" fetchUrl={requests.DreamWorksMovies}/>
        </>)}
      {genre === 'Comedy' && (
        <>
          <Row title="Romantic Comedies Movies" fetchUrl={requests.RomanticComediesMovies}/>
          <Row title="Action Comedies Movies" fetchUrl={requests.ActionComediesMovies} />
        </>)}
      {genre === 'Action' && (
        <>
          <Row title="Action Comedies Movies" fetchUrl={requests.ActionComediesMovies} />
          <Row title="Adventure Movies" fetchUrl={requests.AdventureMovies}/>
          <Row title="War Movies" fetchUrl={requests.WarMovies} />
          <Row title="Crime Movies" fetchUrl={requests.CrimeMovies}/>
        </>)}
      {genre === 'Horror' && (
        <>
          <Row title="Fantasy Horor Movies" fetchUrl={requests.FantasyHorrorMovies}/>
        </>)}     
      {genre === 'Drama' && (
        <>
          <Row title="Romantic Drama Movies" fetchUrl={requests.RomanticDramaMovies} />  
          <Row title="Comedy Drama Movies" fetchUrl={requests.ComedyDramaMovies} /> 
        </>)}  
      {genre === 'Thriller' && (
        <>
          <Row title="Mystery Movies" fetchUrl={requests.MysteryMovies} />  
          <Row title="Sci-Fi Thriller Movies" fetchUrl={requests.SciFiThrillerMovies} /> 
        </>)}  
      {genre === 'Documantary' && (
        <>
          <Row title="History Movies" fetchUrl={requests.HistoryMovies} />  
        </>)}  
      <Row title={"Upcoming"} fetchUrl={requests[`upcoming${genre}Movies`]}/>
    </div>
  );
}

export default GenrePage;
