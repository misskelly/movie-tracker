export const currentUserReducer = (state= {}, action) => {
  switch(action.type) {
    case 'CURRENT_USER':
      return {...action.userInfo};
    default: 
      return state;
  }
}