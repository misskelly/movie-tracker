export const selectedMovieReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_MOVIE' :
      return action.movie
    default :
      return state
  }
}