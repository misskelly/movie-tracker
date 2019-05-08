import React, { Component } from 'react';
import Header from '../Header'
import LoginPage from '../../components/LoginPage'
import Banner from '../../components/Banner'
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import { mockLatestMovie } from '../../utils/mockData'
import { addMovies } from '../../actions/index'
import { connect } from 'react-redux'

export class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.addMovies(mockLatestMovie);
  }

  render() {

    return (
      <div className="App">

        <Route path='/' component={Header} />
        {/* <Route exact path='/' component={Home} /> */}
        <Route exact path='/login' component={LoginPage} />
        <Banner />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
