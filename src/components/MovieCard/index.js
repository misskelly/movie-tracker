import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo'
import { postFavorite } from '../../thunks/postFavorite.js'
import { key } from '../../apiKey'
import { connect } from 'react-redux';
import active from '../../images/active.svg'
import inactive from '../../images/inactive.svg'

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
    this.props.fetchInfo(url);
  }

  toggleFavorite = () => {
    const { id, title, posterPath, releaseDate, voteAverage, overview } = this.props.card
    const body = {
      movie_id: id,
      user_id: this.props.userId,
      title, 
      poster_path: posterPath,
      release_date: releaseDate,
      vote_average: voteAverage,
      overview
    }
    this.props.postFavorite(body)
  }


  render() {
    const { card } = this.props;
    return (
      <article 
        key={card.id} 
        className='movie-card'>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${card.posterPath}`} 
        alt={`Promotional movie poster for ${card.title}`} 
        className='poster-img'/>
       <div className='card-hover'>
        <h4 className='card-hover-heading'>{card.title}</h4>
        <Link to={`/movies/${card.id}`}>
          <button 
            onClick={this.showMoreInfo} 
            className='more-info-btn'>
            More Info
          </button>
        </Link>
        <button 
          className='favorite-btn'
          onClick={this.toggleFavorite}>
          { card.favorite === true 
            ? <img src={active} alt='Star icon for favorited movie'/> 
            : <img src={inactive} alt='Star icon'/>}
        </button>
      </div>
    </article>
    )
  }
}

const mapStateToProps = (state) => ({
  userId: state.currentUser.id
})

const mapDispatchToProps = (dispatch) => ({
  fetchInfo: (url) => dispatch(fetchMovieInfo(url)),
  postFavorite: (body) => dispatch(postFavorite(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);