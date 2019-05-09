export const formTypeReducer = (state = 'login', action) => {
  switch (action.type) {
    case 'FORM_TYPE':
      return action.form
    default: 
      return state;
  }
}