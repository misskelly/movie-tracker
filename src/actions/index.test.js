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
})