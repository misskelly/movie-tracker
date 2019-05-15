import { moviesReducer } from './moviesReducer'
import { formTypeReducer } from './formTypeReducer'
import { combineReducers } from 'redux'
import { currentUserReducer } from './currentUserReducer'
import { selectedMovieReducer } from './selectedMovieReducer'
import { showFavoritesReducer } from './showFavoritesReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  formType: formTypeReducer,
  currentUser: currentUserReducer,
  selectedMovie: selectedMovieReducer,
  showFavorites: showFavoritesReducer
})

export default rootReducer;