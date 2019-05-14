import React from 'react';
import { connect } from 'react-redux';
import { cleanMovies } from '../../utils/cleaners/cleanMovies'

export const MoviePage = (props) =>  {
  const { title, backdrop_path, overview, poster_path, release_date, vote_average } = props.movie;
 
  return(
    <section className='movie-page-container'>
      <article className='movie-banner-wrapper'>
        <img 
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}  
          alt={`Promotional image from ${title}`} 
          className='movie-banner-img'
          />
      </article>
      <article className='movie-info-container'>
        <div className='poster-container'>
          <img 
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  
            alt={`Promotional image from ${title}`} 
            className='movie-banner-img'/>
        </div>
        <div className='movie-text-container'>
          <h2 className='title-heading'>{ title }</h2>
          <h3 className='date-heading'>{ release_date }</h3>
          <h4 className='rating-heading'>Rating: { vote_average }</h4>
          <p className='overview-text'>{ overview }</p>
        </div>
      </article>
    </section>
  )
}

const mapStateToProps = (state) => ({
  movie: state.selectedMovie
})

export default connect(mapStateToProps)(MoviePage)