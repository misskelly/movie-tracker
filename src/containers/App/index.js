import React, { Component } from 'react';
import './App.scss';
// import Header from '../Header'
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import { mockLatestMovie } from '../../utils/mockData'
import movie from './movie.jpg'
import { addMovies } from '../../actions/index'
import { connect } from 'react-redux'
import { key } from '../../apiKey';
import { fetchMovies } from '../../utils/apiFetches/fetchMovies';

export class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    const nowShowingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
    try {
      const movies = await fetchMovies(nowShowingUrl);
      await this.props.addMovies([movies])
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    let all = Array(1000).fill('')
    const movieTiles = all.map(space => {
      return <div className='tile'>
        <img src={movie} className='tile'/>
      </div>
    })
    
    return (
      <div className="App">
        {/* <Header /> */}
        {movieTiles}
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
