import React from 'react';
import movie from './movie.jpg'
import { connect } from 'react-redux';

const Banner = (props) => {
    let all = Array(90).fill('');
    let counter = 0;
    const movieTiles = all.map(space => {
      counter === 19 ? counter = 0 : counter++;
      return (
        <div className='tile'>
          <img src={props.posters[counter]} className='tile' alt=''/>
        </div>)
    })

  return (
    <section className='banner-section'>
      <h1 className='banner-heading'>MovieTracker</h1>
      <div className='movie-tiles'>
        {movieTiles}
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  posters: state.movies.map(movie => movie.poster)
})

export default connect(mapStateToProps)(Banner);