import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo'
import { key } from '../../apiKey'
import { connect } from 'react-redux';
import { active, inactive } from '../../images'


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
      <article key={card.id} className='movie-card'>
      <img src={card.poster} alt={`Promotional movie poster for ${card.title}`} onClick={this.showMoreInfo}/>
        <div className='card-hover'>
        <h4 className='card-hover-heading'>{card.title}</h4>
        <Link to={`/movies/:${card.id}`}><button className='more-info-btn'>More Info</button></Link>
        <button className='favorite-btn'>
          { card.favorite === true ? <img src={active} alt='Star icon for favorited movie'/> : <img src={inactive} alt='Star icon'/>}
        </button>
      </div>
    </article>
    )
  }
}

export default MovieCard;