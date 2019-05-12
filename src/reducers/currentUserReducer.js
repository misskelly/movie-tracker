import { deleteFavorite } from '../utils/apiFetches/deleteFavorite'
const initialState = {}

export const currentUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      console.log(action.userInfo)
      return {...state, ...action.userInfo};
    case 'UPDATE_FAVORITES':
      const favId = action.favorite.movie_id
      state.favorites.some(fav => fav.movie_id === favId) && deleteFavorite(state.id, favId)
      const newFavorites = state.favorites.some(fav => fav.movie_id === favId) 
        ? {...state, favorites: state.favorites.filter(movie => movie.movie_id !== favId) }
        : {...state, favorites: state.favorites.concat(action.favorite) }
      return newFavorites
    default: 
      return state;
  }
}

// const initialState = [];

// export const todosReducer = (state = initialState, action) => {
// 	switch(action.type) {
// 	case 'ADD_TODO':
// 		return [...state, {text: action.text, id: action.id, completed: false}];
// 	case 'TOGGLE_TODO':
// 		return state.map(todo => {
// 			return todo.id === action.id ? {...todo, completed: !todo.completed} : todo;
// 		});
// 	default:
// 		return state;
// 	}
// };
