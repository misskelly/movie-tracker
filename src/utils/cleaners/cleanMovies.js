export const cleanMovies = (movies) => movies.map(movie => {
  const { id, title, poster_path, release_date, vote_average, overview } = movie
  return {
    movie_id: id,
    title,
    poster_path,
    release_date,
    vote_average,
    overview
  }
})
