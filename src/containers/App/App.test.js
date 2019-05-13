import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it.skip('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
