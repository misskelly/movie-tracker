import React from 'react'
import { MovieCard } from '../../components/MovieCard'
import { connect } from 'react-redux'
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo';

const MoviesGallery = (props) => {
  const movies = props.movies.map(movie => 
    <MovieCard 
      moreInfo={props.fetchInfo} 
      card={movie}
    />)
  return (
    <section className='movies-section'>
      {movies}
    </section>
  )
}

const mapStateToProps = (state) => ({movies: state.movies})
const mapDispatchToProps = (dispatch) => ({
  fetchInfo: (url) => dispatch(fetchMovieInfo(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesGallery)