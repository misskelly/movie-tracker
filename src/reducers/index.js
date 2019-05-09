import { moviesReducer } from './moviesReducer'
import { formTypeReducer } from './formTypeReducer'
import { combineReducers } from 'redux'
import { currentUserReducer } from './currentUserReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  formType: formTypeReducer,
  currentUser: currentUserReducer
})

export default rootReducer;