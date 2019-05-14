import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './index';
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo';
import { updateFavorites } from '../../actions/'

jest.mock('../../thunks/fetchMovieInfo');
jest.mock('../../actions/');

describe('MovieCard', () => {
  const mockFetchInfo = jest.fn();
  const mockUpdateFavorites = jest.fn();
  const mockMovies = [

  ]
  const mockMovie = {
    movie_id: 111,
    title: 'Avengers End Game',
    poster_path: 'poster.jpg',
    release_date: '2019-93-19',
    vote_average: '55.5',
    overview: 'Thanos dies'
  }
  let wrapper;
  let mockDispatch;
  beforeEach(() => {
    wrapper = shallow( 
      < MovieCard 
        card={ mockMovie }
        fetchInfo={ fetchMovieInfo }
        updateFavorites = { mockUpdateFavorites }
        userId={ 1 }
        userFavorites= { updateFavorites } />
    )
  })

  afterEach(() => {
    mockDispatch.mockClear();
    fetchMovieInfo.mockClear();
  })

  it('should have initial state', () => {
    const expected = {
      cardHover: false,
      loginPrompt: false
    }
    expect(wrapper.state()).toEqual(expected)
  })

  it('should match component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should fetch showmore info', () => {
    wrapper.instance().showMoreInfo();
    expect(fetchMovieInfo).toHaveBeenCalledTimes(1);
  })

  it('should toggle favorite', () => {
    wrapper.instance().toggleFavorite();
    expect(mockUpdateFavorites).toHaveBeenCalledTimes(1)
  })

  it('should set state loginprompt false if user is valid', () => {
    wrapper.setState({ loginPrompt: true })
    wrapper.instance().toggleFavorite();
    expect(wrapper.state().loginPrompt).toEqual(false);
  })

  it('should toggle loginPrompt', () => {
    wrapper = shallow( 
      < MovieCard 
        card={ mockMovie }
        userFavorites= { updateFavorites } />
    )
    wrapper.instance().toggleFavorite();
    expect(wrapper.state().loginPrompt).toEqual(true);
    wrapper.instance().toggleFavorite();
    expect(wrapper.state().loginPrompt).toEqual(false);
  })

  it.skip('should invoke showmoreinfo on click', () => {
    const spyOnShowMoreInfo = jest.spyOn(wrapper.instance(), 'showMoreInfo')
    wrapper.find('.more-info-btn').simulate('click')
    expect(spyOnShowMoreInfo).toHaveBeenCalledTimes(1)
  })

  it.skip('should invoke toggleFavorite on click', () => {
    const spyOnShowMoreInfo = jest.spyOn(wrapper.instance(), 'toggleFavorite')
    wrapper.find('.favorite-btn').simulate('click');
    expect(spyOnShowMoreInfo).toHaveBeenCalledTimes(1);
  })

  describe('mapStateToProps', () => {
    const mockState = {
      currentUser: { 
        id: 1,
        favorites: [
          {title: 'Avengers Infinity War'}
        ]
      }
    }
    const expected = {
      userId: 1,
      userFavorites: [
        {title: 'Avengers Infinity War'}
      ]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  })

  describe('mapDispatchToProps', () => {
    mockDispatch = jest.fn();
    const mockUrl = 'www.nimsum.com/url/url'
    const mockMovie = [
      {title: 'Avengers Infinity War'}
    ]
    const dispatchUpdateFav = updateFavorites(mockMovie);
    const dispatchFetchInfo = fetchMovieInfo(mockUrl);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchInfo(mockUrl);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchUpdateFav);
    mappedProps.updateFavorites(mockMovie);
    expect(mockDispatch).toHaveBeenCalledWith(dispatchFetchInfo)

  })
})
// describe('mapDispatchToProps', () => {
//   const mockSignIn = {
//     id: 1,
//     name: 'Nim',
//     email: 'nim@sum.com',
//     favorites: []
//   }
//   const { id, name, email, favorites } = mockSignIn;
//   it('should dispatch when using a function from MDTP', () => {
//     const dispatchSignInUser = currentUser(id, name, email, favorites)
//     const dispatchChangeForm = formType('login')
//     const mappedProps = mapDispatchToProps(mockDispatch)
//     mappedProps.signInUser(mockSignIn);
//     expect(mockDispatch).toHaveBeenCalledWith(dispatchSignInUser);
//     mappedProps.changeForm('login');
//     expect(mockDispatch).toHaveBeenCalledWith(dispatchChangeForm);
//   })
// })