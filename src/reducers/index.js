import { moviesReducer } from './moviesReducer'
import { formTypeReducer } from './formTypeReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  movies: moviesReducer,
  formType: formTypeReducer
})

export default rootReducer;