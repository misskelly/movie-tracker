export const addMovies = (movies) => ({
  type: 'ADD_MOVIES',
  movies
})

export const formType = (type) => ({
  type: 'FORM_TYPE',
  form: type
})

export const currentUser = (id, name, email) => ({
  type: 'CURRENT_USER',
  userInfo: { id, name, email }
})

export const selectedMovie = (movie) => ({
  type: 'SELECTED_MOVIE',
  movie
})