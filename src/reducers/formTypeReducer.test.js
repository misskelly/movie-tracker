/* eslint-disable no-undef */
import { formTypeReducer } from './formTypeReducer';
import { formType } from '../actions';


describe('formTypeReducer', () => {

      let initialState;
    beforeEach(() => {
      initialState = 'login';
    });

    it('should return the inital state', () => {
        const expected = 'login';
        const result = formTypeReducer(initialState, '');

        expect(result).toEqual(expected);
      });
      
      it('should update the form type', () => {
        const expected = 'signup';
        const result = formTypeReducer(initialState, formType('signup'))
        
        expect(result).toEqual(expected);
    });

});