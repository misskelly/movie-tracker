import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import { key } from '../../apiKey';
import Header from '../Header'
import Home from '../../components/Home';
import LoginPage from '../../components/LoginPage'
import { fetchMovies } from '../../utils/apiFetches/fetchMovies';
import { cleanMovies } from '../../utils/cleaners/cleanMovies'
import { addMovies } from '../../actions/index'

export class App extends Component {
  async componentDidMount() {
    const nowShowingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    try {
      const movies = await fetchMovies(nowShowingUrl);
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
        <Route exact path='/login' component={ LoginPage } />
        <Route path='/movies/:id' render={<MoviePage {...selectedMovie}/>} />
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
