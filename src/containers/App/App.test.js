import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from '../App';
import { shallow } from 'enzyme'
import { mockMovies } from '../../utils/mockData'
import { addMovies } from '../../actions/index'


jest.mock('../../actions/index')

describe('App', () => {
  let wrapper
  let mockAddMovies
  beforeEach(() => {

    mockAddMovies = jest.mock()
    wrapper = shallow(
      <App 
        movies={mockMovies}
        addMovies={mockAddMovies}
       />
    )
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockMovies)
    }))
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

describe('mapStateToProps', () => {
  it('should return a props object with movies', () => {
    const mockState = { movies: mockMovies}
    const expected = { movies: mockState.movies }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)

  });
});

describe('mapDispatchToProps', () => {
  
  it('calls dispatch with add movies action', () => {
    const dispatch = jest.fn()
    const actionToDispatch = addMovies(mockMovies)  
    mapDispatchToProps(dispatch(actionToDispatch))
    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
    
});
