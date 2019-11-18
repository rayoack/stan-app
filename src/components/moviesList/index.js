import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'

import './styles.css';

export default function moviesList({ movies }) {
    AOS.init()
    
  return (
    <div className="movie-grid">
        {movies.map(movie => (
            <div data-aos="fade-up" className="movie-box" key={movie.title}>
                <img src={movie.images["Poster Art"].url} alt={movie.title}/>
                <p>{movie.title}</p>
            </div>
        ))}
    </div>
  );
}
