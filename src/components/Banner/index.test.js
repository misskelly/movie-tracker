import React from 'react';
import { shallow } from 'enzyme';
import { Banner, mapStateToProps } from './index';

describe('Banner', () => {
  const mockMovieUrls = Array(20).fill('https://image.tmdb.org/t/p/w500/movieposter.jpg/');
  let wrapper  = shallow(
      < Banner 
        posters={ mockMovieUrls } />
    )
  
    it.skip('should match snapshot with posters urls passed in', () => {
      expect(wrapper).toMatchSnapshot();
    })

    it.skip('should match snapshot of show favorites', () => {
      wrapper  = shallow(
        < Banner 
          posters={ mockMovieUrls }
          showFavs={ true } />
      )
      expect(wrapper).toMatchSnapshot();
    })
    
    describe('mapStateToProps', () => {
      const mockState = {
        movies: Array(20).fill({ poster_path: 'movieposter.jpg/' }),
        showFavorites: false
      }
      const expected = {
        posters: mockMovieUrls,
        showFavs: false
      }
      expect(mapStateToProps(mockState)).toEqual(expected);
    })
})