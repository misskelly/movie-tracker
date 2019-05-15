/* eslint-disable no-undef */
import { showFavoritesReducer } from './showFavoritesReducer';
import { showFavorites } from '../actions';


describe('showFavoritesReducer', () => {

      let initialState;
    beforeEach(() => {
      initialState = false;
    });
    it('should return the inital state', () => {
        const expected = false;
        const result = showFavoritesReducer(initialState, false);
        
        expect(result).toEqual(expected);
      });
      
      it('should update state if is shown', () => {
        
        const expected = true;
        const result = showFavoritesReducer(initialState, showFavorites(true));
        expect(result).toEqual(expected);
    });

});