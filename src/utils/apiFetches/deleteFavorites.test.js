import { deleteFavorite } from './deleteFavorite';

describe('deleteFavoirte', () => {
  const mockUserId = 1;
  const mockMovieId = 2;

  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ok: true, message: 'Deleted'})
    }))

  it('should delete favorite using correct params', () => {
    const expectedUrl = `http://localhost:3000/api/users/${mockUserId}/favorites/${mockMovieId}`;
    const expectedSecArg = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }
    deleteFavorite(mockUserId, mockMovieId);
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, expectedSecArg)
  })

  it('should return good response if deletion was successful', async () => {
    const expected = {ok: true, message: 'Deleted'};
    const result = await deleteFavorite(mockUserId, mockMovieId);
    expect(result).toEqual(expected);
  })

  it('should throw error when fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(deleteFavorite(mockUserId, mockMovieId)).rejects.toThrow('Something went wrong');
  })
})