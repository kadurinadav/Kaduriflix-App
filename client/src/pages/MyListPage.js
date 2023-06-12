import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import { FavoriteMoviesContext } from '../context/FavoriteMoviesContext';

const MyListPage = () => {
    const { favoriteMovies } = useContext(FavoriteMoviesContext);

  // Split the favorite movies into rows
  const rows = [];
  for (let i = 0; i < favoriteMovies.length; i += 8) {
    const rowMovies = favoriteMovies.slice(i, i + 8);
    rows.push(rowMovies);
  }

    return (
    <div>
      <Navbar/>
      {rows.map((rowMovies, index) => (
        <Row favoriteMovies={rowMovies} notHomePage={true} />
      ))}
    </div>
  );
};

export default MyListPage;
