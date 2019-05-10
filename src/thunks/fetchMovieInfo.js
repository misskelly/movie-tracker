import { fetchMovies } from '../utils/apiFetches/fetchMovies.js'
import{ selectedMovie } from '../actions/index.js'

export const fetchMovieInfo = (url) => {
  console.log('thunk', url)
  return async (dispatch) => {
    try {
      const movieInfo = await fetchMovies(url)
      await console.log(movieInfo)
      await dispatch(selectedMovie(movieInfo))
    } catch(error) {
      throw new Error(error, 'Problem getting movie info :(')
    }
  }
}