import React from 'react'
import MovieCard from '../../components/MovieCard'
import { connect } from 'react-redux'

const MoviesGallery = (props) => {
  const movies = props.movies.map(movie => 
    <MovieCard 
      card={movie}
    />)
  return (
    <section className='movies-section'>
      {movies}
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MoviesGallery)