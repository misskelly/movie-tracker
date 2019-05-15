import { MoviePage, mapStateToProps } from './index';
import React from 'react';
import { shallow } from 'enzyme';
import { mockSelectedMovie } from '../../utils/mockData';

 
describe('MoviePage', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < MoviePage movie={ mockSelectedMovie }/> )
  })
    
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should return movie state object', () => {
      const mockState = { selectedMovie: mockSelectedMovie };
      const expected = { movie: mockSelectedMovie };
      expect(mapStateToProps(mockState)).toEqual(expected);
    })
  })

})