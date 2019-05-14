import { currentUserReducer } from './currentUserReducer.js';
import * as actions from '../actions';
import { mockUser } from '../utils/mockData.js'
import { deleteFavorite } from '../utils/apiFetches/deleteFavorite';
import { postUser } from '../utils/apiFetches/postUser';

jest.mock('../utils/apiFetches/deleteFavorite')
jest.mock('../utils/apiFetches/postUser')

describe('currentUserReducer', () => {
  const mockFav = {
    movie_id: 299534,
    user_id: 3,
    title: "Avengers: Endgame"
  }
  
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
    const expected = {
      id,
      name,
      email,
      favorites:[...favorites, mockFav]
    }
    const result = currentUserReducer(mockUser, actions.updateFavorites(mockFav))

    expect(result).toEqual(expected);
  });

  it('should add a movie to a users favorites', () => {
    const {id, name, email } = mockUser
    const mockInitial = {
      id,
      name,
      email,
      favorites:[ mockFav ]
    }
    const result = currentUserReducer(mockInitial, actions.updateFavorites(mockFav))

    expect(result.favorites).toEqual([]);
  });

  it('should fetch delete favorite if already favorite', () => {
    const {id, name, email } = mockUser
    const mockExisting = {
      id,
      name,
      email,
      favorites:[mockFav]
    }
    currentUserReducer(mockExisting, actions.updateFavorites(mockFav))
    expect(deleteFavorite).toHaveBeenCalledWith(mockUser.id, mockFav.movie_id)
  })

  it('should fetch post favorite if not a favorite', () => {
    const {id, name, email } = mockUser;
    const mockInitial = {
      id,
      name,
      email,
      favorites:[]
    }
    currentUserReducer(mockInitial, actions.updateFavorites(mockFav))
    expect(postUser).toHaveBeenCalledWith('http://localhost:3000/api/users/favorites/new', mockFav)
  })
});