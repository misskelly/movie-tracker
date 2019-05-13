import * as actions from './index';

describe('actions', () => {

  it('should return type ADD_MOVIES with movies array', () => {
    const mockMovies = [
      { title: "Infinity War"}
    ];
    const expected = {
      type: 'ADD_MOVIES',
      movies: mockMovies
    }
    expect(actions.addMovies(mockMovies)).toEqual(expected);
  })

  it('should return type FORM_TYPE with form type string', () => {
    const mockType = 'signup'
    const expected = {
      type: 'FORM_TYPE',
      form: 'signup'
    }
    expect(actions.formType(mockType)).toEqual(expected);
  })

  it('should return type CURRENT_USER with userInfo data', () => {
    const mockCurrentUser = {
      id: 1,
      name: 'NIMSUM',
      email: 'nimsim@nimsum.io',
      favorites: [{
        id: 1,
        movie_title: 'Avengers Endgame'
      }]
    }
    const { id, name, email, favorites } = mockCurrentUser;
    const expected = {
      type: 'CURRENT_USER',
      userInfo: mockCurrentUser
    }
    expect(actions.currentUser(id, name, email, favorites)).toEqual(expected);
  })

  it('should return type SELECTED_MOVIE with favorite movie as payload', () => {
    const mockFavoriteMovie = {
      movie_id: 1,
      movie_title: 'Avengers Endgame'
    }
    const expected = {
      type: 'SELECTED_MOVIE',
      movie: mockFavoriteMovie
    }
    expect(actions.selectedMovie(mockFavoriteMovie)).toEqual(expected);
  })

  it('should return type UPDATE_FAVORITES with favorite movie as payload', () => {
    const mockFavoriteMovie = {
      movie_id: 1,
      movie_title: 'Avengers Endgame'
    }
    const expected = {
      type: 'UPDATE_FAVORITES',
      favorite: mockFavoriteMovie
    }
    expect(actions.updateFavorites(mockFavoriteMovie)).toEqual(expected);
  })

  it('should return tpe SHOW_FAVORITES with boolean as payload', () => {
    const mockBoolean = true;
    const expected = {
      type: 'SHOW_FAVORITES',
      isShown: mockBoolean
    }
    expect(actions.showFavorites(mockBoolean)).toEqual(expected);
  })

})