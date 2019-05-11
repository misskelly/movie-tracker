import React, { Component } from 'react';

export const MoviePage = () =>  {


  return(
    <section className='movie-page-container'>
      <article className='movie-banner-wrapper'>
        <img src={movie.banner} alt={`Promotional image from ${movie.title}`} className='movie-banner-img'/>
      </article>
      <article className='movie-info-container'>
        <div className='poster-container'>
          <img src={movie.poster} alt={`Promotional image from ${movie.title}`} className='movie-banner-img'/>
        </div>
        <h2 className='title-heading'>{movie.title}</h2>
        <h3 className='date-heading'>{movie.date}</h3>
        <h4 className='rating-heading'>Rating: {movie.rating}</h4>
        <p className='overview-text'>{movie.overview}</p>
      </article>
    </section>
  )
}