import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Homepage.css';

const Homepage = () => {
  return (
<div>
    <Navbar/>
    <div className="textBox">
        <h1 id="nadpis">MOVS</h1>
        <h1 id="txt">
            Can't seem to make up your<br />
            mind on what movie to watch?<br />
            <span style={{ color: 'aqua' }}>Let us help!</span>
        </h1>
        <h3 id="txt2">
            We understand that sometimes it can be difficult to decide on what movie to watch,<br />
            especially with the overwhelming amount of choices available.<br />
            That's why we created this platform to make<br />
            the process of choosing a movie more fun and exciting.
        </h3>
    </div>
</div>


  );
};

export default Homepage;
