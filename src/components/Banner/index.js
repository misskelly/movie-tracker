import React from 'react';
import { connect } from 'react-redux';
const uuidv4 = require('uuid/v4');

export const Banner = (props) => {
    let all = Array(256).fill('');
    let counter = 0;
    const movieTiles = all.map(space => {
      counter === 19 ? counter = 0 : counter++;
      return (
        <div key={uuidv4()} className='tile'>
          <img src={props.posters[counter]} className='tile' alt=''/>
        </div>)
    })

  return (
    <section className='banner-section'>
      <h1 className='banner-heading'>{props.showFavs ? 'Favorites' : 'MovieTracker'}</h1>
      <div className='movie-tiles'>
        {movieTiles}
      </div>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  posters: state.movies.map(movie => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`),
  showFavs: state.showFavorites
})

export default connect(mapStateToProps)(Banner);