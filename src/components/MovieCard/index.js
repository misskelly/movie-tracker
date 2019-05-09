import React from 'react'

export const MovieCard = ({card}) => {
  
  return (
    <article key={card.id} className='movie-card'>
      <img src={card.poster} alt={`Promotional movie poster for ${card.title}`}/>
    </article>
  )
  }