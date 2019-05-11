import React, { Component } from 'react';
import { connect } from 'react-redux';

export const MoviePage = (props) =>  {
  const { original_title } = props.movie;
  
  return(
    <section className='movie-page-container'>
      <article className='movie-banner-wrapper'>
      <h1>{ original_title }</h1>
        {/* <img src={movie.banner} alt={`Promotional image from ${movie.title}`} className='movie-banner-img'/> */}
      </article>
      <article className='movie-info-container'>
        <div className='poster-container'>
          {/* <img src={movie.poster} alt={`Promotional image from ${movie.title}`} className='movie-banner-img'/> */}
        </div>
        {/* <h2 className='title-heading'>{movie.title}</h2>
        <h3 className='date-heading'>{movie.date}</h3>
        <h4 className='rating-heading'>Rating: {movie.rating}</h4>
        <p className='overview-text'>{movie.overview}</p> */}
      </article>
    </section>
  )
}

const mapStateToProps = (state) => ({
  movie: state.selectedMovie
})

export default connect(mapStateToProps)(MoviePage)