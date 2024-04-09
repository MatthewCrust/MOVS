import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <h1>MOVS</h1>
        </Link>
      </div>
      <ul className="navbar-right">
        <li>
          <Link to="/main">Random Movie</Link>
        </li>
        <li>
          <Link to="/sign">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
