import React from 'react';
import './App.scss';

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
      <header className='header'>
      </header>
      {movieTiles}
    </div>
  );
}

export default App;
