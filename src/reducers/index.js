import { moviesReducer } from './moviesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies: moviesReducer
})

export default rootReducer;