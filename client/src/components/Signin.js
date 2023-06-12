import React, { useState, useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FavoriteMoviesContext } from '../context/FavoriteMoviesContext';
import LoadingSpinner from '../components/LoadingSpinner';
import './Sign.css';

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userError, setUserError] = useState('');
  const {setUserEmail} = useContext(FavoriteMoviesContext);
  const [isLoading, setIsLoading] = useState(false);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.get('http://localhost:3001/users/auth', {
        params: {
          email: email,
          password: password
        }
      });
  
      const data = response.data;
  
      if (data.success === true) {
        // Save curr user Email
        setUserEmail(email);
        //
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          // Navigate to home Page
          navigate('../home');
        }, 1000);
      } else {
        // User does not exist
        setUserError(data.message);
        // reset the form
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    }
  };
  

  return (
    <>
    {isLoading && <LoadingSpinner/>}
      {!isLoading && <div className="login">
        <h2 className="login-title"> Sign In </h2>
        <form className="login-form" onSubmit={submitHandler}>
          <input className="login-input" type="email" placeholder="Email" value={email} onChange={emailHandler} required/>
          <input className="login-input" type="password" placeholder="Password" value={password} onChange={passwordHandler} required/>
          <button className="login-button" type="submit"> Sign In </button>
          {userError && (
            <p className="error-message">
              {userError}
            </p>)}
          <h3> New to Kaduriflix? <Link to="/signup" className="signup-link"> Sign up now </Link></h3>
        </form>
      </div>}
    </>
  );
};

export default Signin;