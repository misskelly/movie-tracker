import { fetchAnything } from '../utils/apiFetches/fetchAnything.js'
import{ selectedMovie } from '../actions/index'
import { fetchMovieInfo } from './fetchMovieInfo.js'

jest.mock('../utils/apiFetches/fetchAnything.js')

describe('fetchMovieInfo', () => {
  let mockUrl;
  let mockMovie;
  let thunk;
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'www.whateverurl.com'
    mockMovie = {
      title: 'Avengers',
      movie_id: '12345'
    }
    thunk = fetchMovieInfo(mockUrl);
    mockDispatch = jest.fn();
  });

  it('should invoke fetchAnything with the correct url', () => {
    thunk(mockDispatch);
    expect(fetchAnything).toHaveBeenCalledWith(mockUrl);

  });

  it('should dispatch selectedMovie', async () => {
    fetchAnything.mockImplementation(() => mockMovie)
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(selectedMovie(mockMovie));
  });
  
  it('should throw an error if fetch fails', async () => {
    fetchAnything.mockImplementation(() => Promise.reject())
    await expect(thunk(mockDispatch)).rejects.toThrow('Problem getting movie info :(')
  });

});
