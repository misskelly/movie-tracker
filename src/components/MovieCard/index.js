import React, { Component } from 'react';
import { fetchMovieInfo } from '../../thunks/fetchMovieInfo'
import { key } from '../../apiKey'
import { connect } from 'react-redux'


export class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      cardHover: false
    }
  }
  showMoreInfo = (e) => {
    const { card, fetchMovieInfo } = this.props;
    const url = `https://api.themoviedb.org/3/movie/${card.id}?api_key=${key}&language=en-US`
    fetchMovieInfo(url)
  }

  render() {
    const { card } = this.props;
    return (
      <article key={card.id} className='movie-card'>
      <img src={card.poster} alt={`Promotional movie poster for ${card.title}`} onClick={this.showMoreInfo}/>
    </article>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  fetchMovieInfo: (url) => dispatch(fetchMovieInfo(url))
})  

export default connect(null, mapDispatchToProps)(MovieCard)