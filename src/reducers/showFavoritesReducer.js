export const showFavoritesReducer = (state = false, action) => {
  return action.type === 'SHOW_FAVORITES'
    ? action.isShown
    : state
}