  import React, { useState } from 'react';
  import {Link, useNavigate } from 'react-router-dom';
  import axios from 'axios';
  import './Sign.css'

  function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [userNotCreated, setUserNotCreated] = useState(false);

    const emailHandler = (event) => {
      setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
      setPassword(event.target.value);
    };

    const nameHandler = (event) => {
      setName(event.target.value);
    };

    const phoneHandler = (event) => {
      setPhone(event.target.value);
    };

    const submitHandler = async (event) => {
      event.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/users', {
          name: name,
          phone: phone,
          email: email,
          password: password
        });
  
        const data = response.data;
        
        // User created successfully
        if (data.success) {
          // Navigate to home page or any other desired route
          navigate('../');
        } else {
        // User was not created
        setUserNotCreated(true);
        // Reset the form
        setName('');
        setPhone('');
        setEmail('');
        setPassword('');
        }
      } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      }
    };

    return (
      <div className="login">
        <h2 className="login-title"> Sign Up </h2>
        <form className="login-form" onSubmit={submitHandler}>
          <input className="login-input" placeholder="Full Name" value={name} onChange={nameHandler} required/>
          <input className="login-input" type="tel" placeholder="Phone Number" value={phone} onChange={phoneHandler} required/>
          <input className="login-input" type="email" placeholder="Email" value={email} onChange={emailHandler} required/>
          <input className="login-input" type="password" placeholder="Password" value={password} onChange={passwordHandler} required/>
          <button className="login-button" type="submit"> Sign Up </button>
          {userNotCreated && (
          <p className="error-message">
            Sorry, a user with this email address is already exists. Please try again or <Link to="/" className="signin-link"> sign in here </Link>.
          </p>)}
          <h3> Already a user? <Link to="../" className="signin-link"> Sign in now </Link></h3>
        </form>
      </div>
    );
  }

  export default Signup