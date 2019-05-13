import React from 'react';
import { shallow } from 'enzyme';
import { Banner } from './index';

describe('Banner', () => {
  const mockMovieUrls = Array(20).fill('movieurl.com/movieposter/');
  let wrapper  = shallow(
      < Banner 
        posters={ mockMovieUrls } />
    )
  
    it('Should match snapshot with posters urls passed in', () => {
      expect(wrapper).toMatchSnapshot();
    })

})