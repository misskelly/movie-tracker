import { postUser } from '../utils/apiFetches/postUser.js'

export const postFavorite = (body) => {
  return async (dispatch) => {
    try {
      const url = 'http://localhost:3000/api/users/favorites/new'
      await postUser(url, body)
    } catch(error) {
      throw new Error(error, 'Failed to post favorite')
    }
  }

}