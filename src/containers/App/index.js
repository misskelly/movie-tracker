import React, { Component } from 'react';
import './App.scss';
// import Header from '../Header'
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';
import { mockLatestMovie } from '../../utils/mockData'
import movie from './movie.jpg'
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
