const initialState = {}

export const currentUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      console.log(action.userInfo)
      return {...state, ...action.userInfo};
    case 'UPDATE_FAVORITES':
    console.log(state.favorites)
      const newFavorites = state.favorites.some(fav => fav.movie_id === action.favorite.movie_id) 
        ? {...state, favorites: state.favorites.filter(movie => movie.movie_id !== action.favorite.movie_id) }
        : {...state, favorites: state.favorites.concat(action.favorite) }
      console.log(newFavorites)
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
