import { currentUserReducer } from './currentUserReducer.js';
import * as actions from '../actions';
import { mockUser } from '../utils/mockData.js'
import { deleteFavorite } from '../utils/apiFetches/deleteFavorite';
import { postUser } from '../utils/apiFetches/postUser';

jest.mock('../utils/apiFetches/deleteFavorite')
jest.mock('../utils/apiFetches/postUser')

describe('currentUserReducer', () => {
  beforeEach(() => {
    // jest.mock(mockPostUser = jest.fn()
    // mockDeleteFavorite = jest.fn()
  });
  
  it('should return the initial state', () => {
    const expected = {};
    const result = currentUserReducer(undefined, {});
    expect(result).toEqual(expected);
  });
  
  it('should return the state with a current user', () => {
    const {id, name, email, favorites } = mockUser
    
    const expected = {id, name, email, favorites}
    const result = currentUserReducer(undefined, actions.currentUser(id, name, email, favorites))
    
    expect(result).toEqual(expected);
  });
  it('should add a movie to a users favorites', () => {
    const {id, name, email, favorites } = mockUser
    const mockFav = {
      movie_id: 299534,
      user_id: 3,
      title: "Avengers: Endgame"
    }
    const expected = {
      id,
      name,
      email,
      favorites:[...favorites, mockFav]
    }
    const result = currentUserReducer(mockUser, actions.updateFavorites(mockFav))

    expect(result).toEqual(expected);
  });

  
  //TODO: 
  // mock imported functions
  // add expect post user thbcw url and new fav
  //test existing fav, 
  //add expect deleteFav thbcw state.id and favId
});

// beforeEach(() => {
//   mockUrl = 'someUrl.com';
//   mockStaff = [{
//     name: 'christie',
//     info: 'some info'
//   }, {
//     name: 'leta',
//     info: 'some info'
//   }];
//   mockDispatch = jest.fn();
//   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//     ok: true,
//     bio: mockStaff
//   }));
//   thunk = fetchStaff(mockUrl);
// });
//   it('should return the state with a new todo', () => {
//         const text = 'learn redux'; 
//         const id = 1;
//         const expected = [{ text, id, completed: false }]; 
        
//         const result = todosReducer(undefined, actions.addTodo(text, id));
//         expect(result).toEqual(expected);
//     });
// // const expected = [];

// const result = todosReducer(undefined, {});
// expect(result).toEqual(expected);
