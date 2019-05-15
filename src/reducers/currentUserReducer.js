import { deleteFavorite } from '../utils/apiFetches/deleteFavorite';
import { postUser } from '../utils/apiFetches/postUser';
const initialState = {}

export const currentUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return {...state, ...action.userInfo};
    case 'UPDATE_FAVORITES':
      const favId = action.favorite.movie_id
      const existingFav =  state.favorites.some(fav => fav.movie_id === favId);
      if(existingFav) {
        deleteFavorite(state.id, favId)
        return {...state, favorites: state.favorites.filter(movie => movie.movie_id !== favId) }
      } else {
        postUser('http://localhost:3000/api/users/favorites/new', action.favorite)
        return {...state, favorites: state.favorites.concat(action.favorite) }
      }
    default: 
      return state;
  }
}