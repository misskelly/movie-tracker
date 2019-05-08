export const cleanMovies = (movies) => movies.map(movie => ({
  id: movie.id,
  poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
  title: movie.title
}))
