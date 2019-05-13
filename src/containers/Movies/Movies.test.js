import React from 'react';
import { shallow } from 'enzyme';
import { MoviesGallery, mapStateToProps } from './index';
import { showFavorites } from '../../actions';
import { mockMovies, mockUser } from '../../utils/mockData'

describe('MoviesGallery', () => {
  let mockFavMovieIds;
  let mockMovies;
  let mockShowMovies;
  let mockMovieCard;
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