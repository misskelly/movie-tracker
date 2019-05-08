import { moviesReducer } from './moviesReducer';
import { addMovies } from '../actions';

describe('moviesReducer', () => {
  it('should return default state by default', () => {
    expect(moviesReducer(undefined, {})).toEqual([]);
  })

  it('should return movies array if given correct action', () => {
    const movies = [{ title: 'Avengers Infinity War'}];
    const action = addMovies(movies);
    expect(moviesReducer(undefined, action)).toEqual(movies);
  })
})