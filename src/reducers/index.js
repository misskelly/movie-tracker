import { moviesReducer } from './moviesReducer'
import { formTypeReducer } from './formTypeReducer'
import { combineReducers } from 'redux'
import { currentUserReducer } from './currentUserReducer'
import { selectedMovieReducer } from './selectedMovieReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  formType: formTypeReducer,
  currentUser: currentUserReducer,
  selectedMovie: selectedMovieReducer
})

export default rootReducer;