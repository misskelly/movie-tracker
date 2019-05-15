import { MoviePage } from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('MoviePage', () => {
  const mockSelectedMovie = {
    adult: false,
    backdrop_path: "/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg",
    belongs_to_collection: null,
    budget: 80000000,
    homepage: "http://www.shazammovie.com",
    id: 287947,
    imdb_id: "tt0448115",
    original_language: "en",
    original_title: "Shazam!",
    overview: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    popularity: 307.286,
    poster_path: "/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    release_date: "2019-03-23",
    revenue: 321937864,
    runtime: 132,
    status: "Released",
    tagline: "Just Say The Magic Word",
    title: "Shazam!",
    video: false,
    vote_average: 7.2,
    vote_count: 1528,
    showFavorites: false
  }
  let wrapper;
  beforeEach(() => {
    wrapper = shallow( < MoviePage movie={ mockSelectedMovie }/> )
  })
  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})