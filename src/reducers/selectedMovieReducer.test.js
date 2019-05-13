/* eslint-disable no-undef */
import { selectedMovieReducer } from './selectedMovieReducer';
import * as actions from '../actions';
import { mockUser } from '../utils/mockData.js'


describe('selectedMovieReducer', () => {
    it('should return the inital state', () => {
        const expected = {};
        const result =selectedMovieReducer(undefined, {});
        
        expect(result).toEqual(expected);
      });
      
      it('should return the state with the selected movie', () => {
        const mockMovie = mockUser.favorites[0]
        const expected = mockMovie;
        const result =selectedMovieReducer(undefined, actions.selectedMovie(mockMovie));
        expect(result).toEqual(expected);
    });

});