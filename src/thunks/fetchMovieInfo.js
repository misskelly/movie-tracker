import { fetchMovies } from '../utils/apiFetches/fetchMovies.js'
import{ selectedMovie } from '../actions/index'

export const fetchMovieInfo = (url) => {
  return async (dispatch) => {
    try {
      const movieInfo = await fetchMovies(url)
      dispatch(selectedMovie(movieInfo))
    } catch(error) {
      throw new Error(error, 'Problem getting movie info :(')
    }
  }
}