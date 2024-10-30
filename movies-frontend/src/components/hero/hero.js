import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './hero.css';
import { Link, useNavigate } from 'react-router-dom';

export const Hero = ({ movies }) => {
    const navigate = useNavigate();

    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`);
    }

    return (
    <div className='movie-carousel-container'>
      <Carousel
        animation="fade"
        indicators={true}
        navButtonsAlwaysVisible={true}
        interval={6000}
        swipe={true}
        height="100vh"
      >
        {movies.map((movie) => (
          <Paper key={movie.title}>
                    <div className='movie-card-container'>
                        <div className='movie-card'>
                <div className='movie-backdrop'>
                  <img src={movie.poster} alt="" />
                                </div>
                <div className='movie-detail'>
                  <div className='movie-poster'>
                    <img src={movie.poster} alt={movie.title} />
                  </div>
                  <div className='movie-title'>
                    <h4>{movie.title}</h4>
                  </div>
                    </div>
                <div className='movie-buttons'>
                    <Link to={`/Trailer/${movie.trailerLink?.split('v=')[1] || ''}`}>
                        <button className='play-button'>
                            ▶ Play
                        </button>
                    </Link>
                    <button className='reviews-button' onClick={() => reviews(movie.imdbId)}>
                    ★ Reviews
                  </button>
    </div>
              </div>
    </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
