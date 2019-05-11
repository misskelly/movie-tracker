import React, { Component } from 'react';
import { key } from '../../apiKey';

export class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      cardHover: false
    }
  }
  
  showMoreInfo = () => {
    const { card, moreInfo } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${card.id}?api_key=${key}&language=en-US`;
    moreInfo(url);
  }

  render() {
    const { card } = this.props;
    return (
      <article 
        key={card.id} 
        className='movie-card'>
      <img 
        src={card.poster} 
        alt={`Promotional movie poster for ${card.title}`} 
        className='poster-img'
        onClick={this.showMoreInfo}/>
    </article>
    )
  }
}

export default MovieCard;