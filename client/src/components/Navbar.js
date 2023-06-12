import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import kaduriflixLogo from '../assets/kaduriflix-logo.png';
import changeUserLogo from '../assets/change-user-logo.png';
import './Navbar.css'

function Navbar({ showBackground, onSearch }) {

  const [searchKey, setSearchKey] = useState("")
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: false });
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    onSearch(searchKey);
    setSearchKey('');
    document.getElementById('search-input').value = '';
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <Link to="../home">
          <img className="kaduriflix-logo" src={kaduriflixLogo} alt="Logo" />
        </Link>
        <ul className="navbar-menu">
        <li className="navbar-item">
            <Link className="navbar-link" to="../myList">
              My List
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Family">
              Kids & Family
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Comedy">
            Comedy
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Action">
            Action
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Horror">
              Horror
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Drama">
              Darama
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Thriller">
              Thriller
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="../genre/Documantary">
              Documantary
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <form className="form" onSubmit={searchMovies}>
          <div  className="search-container">
            <i className="fas fa-search"></i>
            <input
              type="text"
              id="search-input" 
              onChange={(e) => setSearchKey(e.target.value)}/>
              <Link to={`../search/${searchKey}`}>
                <button type="submit">Search</button>
              </Link>
          </div>
        </form>
        <Link to="../" className="change-user-logo">
          <img src={changeUserLogo} alt="Log Out" title="Log Out"/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar