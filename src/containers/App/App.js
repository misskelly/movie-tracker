import React from 'react';
import './App.scss';
import Header from '../Header'
import { Route, NavLink, Link, Switch, Redirect } from 'react-router-dom';

import movie from './movie.jpg'

function App() {
  let all = Array(1000).fill('')
  const movieTiles = all.map(space => {
    return <div className='tile'>
      <img src={movie} className='tile'/>
    </div>
  })
  return (
    <div className="App">
      <Header />
      {movieTiles}
    </div>
  );
}

export default App;
