import { postUser } from './postUser';

describe('postUser', () => {
  const mockUrl = 'www.nimsum.com/';
  const mockBody = {
    email: 'nim@sum.com', password: 'dimsum'
  }
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ message: 'Success'})
    }))
  it('should fetch using correct parameters', () => {
    postUser(mockUrl, mockBody);
    const expectedSecondArg = {
      method: 'POST',
      body: JSON.stringify(mockBody),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expectedSecondArg)
  })

  it('should return user info with successfull feetch', async () => {
    const expected = { message: 'Success'};
    const result = await postUser(mockUrl, mockBody);
    expect(result).toEqual(expected);
  })

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({ ok: false }));
    expect(postUser(mockUrl, mockBody)).rejects.toThrow('Failed to post user data');
  })
})