import React, { useState } from 'react';
import './Main.css';
import Navbar from './Navbar';

const Main = () => {
    const [selectedGenre, setSelectedGenre] = useState('');
    const [minRating, setMinRating] = useState(6.0);
    const [minYear, setMinYear] = useState(2019);
    const [maxYear, setMaxYear] = useState(2024);
    const [randomMovie, setRandomMovie] = useState(null);

    const API_KEY = '0983f787f8247be833a1f0c24c376130';

    async function fetchRandomMovieByGenre() {
        try {
            const maxAttempts = 10;
            let attempt = 1;
            let movies = [];

            while (attempt <= maxAttempts && movies.length === 0) {
                const randomPage = Math.floor(Math.random() * 500) + 1; 

                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}&page=${randomPage}`);
                const data = await response.json();

                if (data.results && data.results.length > 0) {
                    movies = data.results.filter(movie => {
                        return (
                            movie.vote_average >= minRating &&
                            parseInt(movie.release_date.substring(0, 4)) >= minYear &&
                            parseInt(movie.release_date.substring(0, 4)) <= maxYear
                        );
                    });
                }

                attempt++;
            }

            if (movies.length > 0) {
                const randomIndex = Math.floor(Math.random() * movies.length);
                const randomMovie = movies[randomIndex];
                setRandomMovie(randomMovie);
            } else {
                console.error('No results found after', maxAttempts, 'attempts.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleGenreChange = event => {
        setSelectedGenre(event.target.value);
    };

    const handleButtonClick = () => {
        if (selectedGenre) {
            fetchRandomMovieByGenre();
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="box">
                <div className="textBox">
                    <div className="zanrBox">
                        <button onClick={handleButtonClick} id="btn">
                            Find movie
                        </button>
                        <div className="menu">
                            <select className='menuBtn' onChange={handleGenreChange} value={selectedGenre}>
                                <option value="">Select genre</option>
                                <option value="27">Horror</option>
                                <option value="16">Animated</option>
                                <option value="53">Thriller</option>
                                <option value="80">Crime</option>
                                <option value="35">Comedy</option>
                                <option value="878">Sci-Fi</option>
                                <option value="28">Action</option>
                                <option value="37">Western</option>
                                <option value="10749">Romance</option>
                                <option value="14">Fantasy</option>
                                <option value="10402">Musical</option>
                            </select>
                            <div className='yearBox'>
                                <input
                                className='yearInput'
                                    type="number" 
                                    id="minYearInput" 
                                    value={minYear} 
                                    onChange={(e) => setMinYear(parseInt(e.target.value))}
                                />

                                <input 
                                    className='yearInput'
                                    type="number" 
                                    id="maxYearInput" 
                                    value={maxYear} 
                                    onChange={(e) => setMaxYear(parseInt(e.target.value))}
                                />
                            </div>
                            <div className='ratingBox'>
                                <label htmlFor="minRatingInput">Minimum Rating:</label><br></br>
                                <input 
                                    className='yearInput'
                                    type="number" 
                                    id="minRatingInput" 
                                    value={minRating} 
                                    onChange={(e) => setMinRating(parseFloat(e.target.value))}
                                    step="0.1"
                                    min="0"
                                    max="10"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div id="posterBox" className="posterBox">
                    <div className='movieTextBox'>
                        <h2>{randomMovie ? randomMovie.title : ''}</h2>
                        <h3>Rating: <span style={{ color: '#66FCF1' }}>{randomMovie ? randomMovie.vote_average : ''}/10</span> ({randomMovie ? randomMovie.vote_count : ''} votes)</h3>
                        <h3>{randomMovie ? (randomMovie.release_date ? randomMovie.release_date.substring(0, 4) : '') : ''}</h3>
                        <h4>{randomMovie ? randomMovie.overview : ''}</h4>
                    </div>
                    {console.log("Random movie:", randomMovie)}
                    {randomMovie && console.log("Poster path:", randomMovie.poster_path)}
                    {randomMovie && randomMovie.poster_path && (
                    <img
                        id="poster"
                        src={`https://image.tmdb.org/t/p/w500/${randomMovie.poster_path}`}
                        width="350"
                        height="550"
                        alt={randomMovie.title}
                    />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Main;
