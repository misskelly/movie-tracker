import React from 'react';
import movie from './movie.jpg'


const Banner = () => {
    let all = Array(300).fill('')
    const movieTiles = all.map(space => {
      return <div className='tile'>
        <img src={movie} className='tile' alt=''/>
      </div>
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

export default Banner;