import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { key } from '../../apiKey';
import Header from '../Header'
import Home from '../../components/Home';
import LoginPage from '../../components/LoginPage'
import { fetchAnything } from '../../utils/apiFetches/fetchAnything';
import { cleanMovies } from '../../utils/cleaners/cleanMovies'
import { addMovies } from '../../actions/index'
import MoviePage from '../../containers/MoviePage'

export class App extends Component {
  async componentDidMount() {
    const nowShowingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    try {
      const movies = await fetchAnything(nowShowingUrl);
      const result = await cleanMovies(movies.results)
      await this.props.addMovies(result)
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={ Home } />
        <Route exact path='/favorites' component={ Home } />
        <Route exact path='/login' component={ LoginPage } />
        <Route exact path='/movies/:id' component={ MoviePage } />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

App.propTypes = {
  movies: PropTypes.array,
  addMovies: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
