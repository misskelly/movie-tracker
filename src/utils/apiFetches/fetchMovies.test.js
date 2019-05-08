import { fetchMovies } from './fetchMovies';

describe('fetchMovies', () => {
  const mockUrl = 'https://api.themoviedb.org/3/movie/now_playing';
  const mockResult = [{ movie: 'movie-1'}]
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult)
    }))

  it('should fetch using correct url parameter', () => {
    fetchMovies(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  })

  it('should return movies array if fetch status ok', async () => {
    const result = await fetchMovies(mockUrl);
    await expect(result).toEqual(mockResult);
  })

  it('should return an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({ ok: false }));
    await expect(fetchMovies(mockUrl)).rejects.toEqual(Error('Failed to fetch movies'));
  })
})