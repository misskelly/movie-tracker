import { fetchAnything } from '../utils/apiFetches/fetchAnything.js'
import{ selectedMovie } from '../actions/index'

export const fetchMovieInfo = (url) => {
  return async (dispatch) => {
    try {
      const movieInfo = await fetchAnything(url)
      dispatch(selectedMovie(movieInfo))
    } catch(error) {
      throw new Error(error, 'Problem getting movie info :(')
    }
  }
}