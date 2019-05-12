import React from 'react'
import MovieCard from '../../components/MovieCard'
import { connect } from 'react-redux'

const MoviesGallery = (props) => {
  const favoriteMovieIds = props.favorites.map(movie => movie.movie_id)
  const movies = props.movies.map( movie => {
    return {...movie, favorite: favoriteMovieIds.includes(movie.movie_id) ? true : false}
  })
  const showMovies = props.showFavorites 
    ? movies.filter(movie => movie.favorite)
    : movies
  const movieCards = showMovies.map(movie => 
    <MovieCard 
      card={movie}
    />)
  
  return (
    <section className='movies-section'>
      {movieCards}
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  favorites: state.currentUser.favorites || [],
  showFavorites: state.showFavorites
})

export default connect(mapStateToProps)(MoviesGallery)