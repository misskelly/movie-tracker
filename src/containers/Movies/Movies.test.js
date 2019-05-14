import React from 'react';
import { shallow } from 'enzyme';
import { MoviesGallery, mapStateToProps } from './index';
import { mockMovies, mockUser } from '../../utils/mockData'

describe('MoviesGallery', () => {
  let mockShowFavorites;
  let wrapper;
  
  beforeEach(() => {
    mockShowFavorites = jest.fn()
    wrapper = shallow(<MoviesGallery favorites={mockUser.favorites} movies={mockMovies} showFavorites={mockShowFavorites}/>)
  });

  it('should match snapshot', () => {
    
    expect(wrapper).toMatchSnapshot();

  });

});

describe('mapStateToProps', () => {
  it('should return a props object with movies, favorites, and showFavorites', () => {
    let mockShowFavorites = jest.fn();
    const mockState = {
      movies: mockMovies,
      favorites: [],
      showFavorites: mockShowFavorites,
      formType: "login",
      currentUser: {},
      selectedMovie: {}
    }
    const expected = {
      movies: mockState.movies,
      favorites: mockState.favorites,
      showFavorites: mockState.showFavorites
    }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  });
});