import React from 'react';
import Navbar from './Navbar';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Sign = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, usernameInput, passwordInput);
      localStorage.setItem('isLoggedIn', true); 
      alert("You already have an account, you have been signed in.")  
    } catch (loginError) {
      try {
        await createUserWithEmailAndPassword(auth, usernameInput, passwordInput);
        localStorage.setItem('isLoggedIn', true); 
        alert("You didnt have an account, your account have been created.")
      } catch (signUpError) {
        setError(signUpError.message);
      }
    }
  };

  return (
    
    <div className="login-container">
      <Navbar/>
      <h2>Login or Sign Up</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={usernameInput}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={passwordInput}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login / Sign Up</button>
      </form>
      {error && <div className="alert">{error}</div>}
    </div>
  );
}


export default Sign;
