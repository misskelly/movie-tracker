import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo'
import { updateFavorites } from '../../actions/index.js'
import { key } from '../../apiKey'
import { connect } from 'react-redux';
import active from '../../images/active.svg'
import inactive from '../../images/inactive.svg'

export class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      cardHover: false,
      loginPrompt: false
    }
  }
  
  showMoreInfo = () => {
    const { card } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${card.movie_id}?api_key=${key}&language=en-US`;
    this.props.fetchInfo(url);
  }

  toggleFavorite = () => {
    const { movie_id, title, poster_path, release_date, vote_average, overview } = this.props.card
    const body = {
      movie_id,
      user_id: this.props.userId,
      title,
      poster_path,
      release_date,
      vote_average,
      overview
    }
    if (this.props.userId) {
      this.props.updateFavorites(body)
      this.setState({ loginPrompt: false })
    } else {
      this.setState({ loginPrompt: !this.state.loginPrompt })
    }
  }

  render() {
    const { card } = this.props;
    return (
      <article 
        key={card.movie_id} 
        className='movie-card'>
      <img 
        src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} 
        alt={`Promotional movie poster for ${card.title}`} 
        className='poster-img'/>
       <div className='card-hover'>
        <h4 className='card-hover-heading'>{card.title}</h4>
        <Link to={`/movies/${card.movie_id}`}>
          <button 
            onClick={this.showMoreInfo} 
            className='more-info-btn'>
            More Info
          </button>
        </Link>
        <button 
          className='favorite-btn'
          onClick={this.toggleFavorite}>
          { card.favorite 
            ? <img src={active} alt='Star icon for favorited movie'/> 
            : <img src={inactive} alt='Star icon'/>}
        </button>
          { this.state.loginPrompt && 
            (<p>Please login to Favorite this card</p>)}
      </div>
    </article>
    )
  }
}

export const mapStateToProps = (state) => ({
  userId: state.currentUser.id,
  userFavorites: state.currentUser.favorites || []
})

export const mapDispatchToProps = (dispatch) => ({
  fetchInfo: (url) => dispatch(fetchMovieInfo(url)),
  updateFavorites: (movie) => dispatch(updateFavorites(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);