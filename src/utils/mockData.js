export const mockLatestMovie = [{
  "adult": false,
  "backdrop_path": null,
  "belongs_to_collection": null,
  "budget": 0,
  "genres": [],
  "homepage": null,
  "id": 600900,
  "imdb_id": null,
  "original_language": "fr",
  "original_title": "Le Cri nu",
  "overview": "",
  "popularity": 0,
  "poster_path": null,
  "production_companies": [],
  "production_countries": [{
    "iso_3166_1": "FR",
    "name": "France"
  }],
  "release_date": "1979-01-01",
  "revenue": 0,
  "runtime": null,
  "spoken_languages": [],
  "status": "Released",
  "tagline": "",
  "title": "Le Cri nu",
  "video": false,
  "vote_average": 0,
  "vote_count": 0
}]

export const mockUser = {
  id: 1,
  name: "misskelly",
  email: "kelly@kelly.com",
  favorites: [{
    id: 2,
    movie_id: 287947,
    user_id: 1,
    title: "Shazam!",
  }]
}

export const mockMovies = [
  {
    movie_id: 299534,
    title: "Avengers: Endgame",
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    release_date: "2019-04-24",
    vote_average: 8.6,
    overview: "After the devastating events ...."
  },
  {
    movie_id: 447404,
    title: "Pokémon Detective Pikachu",
    poster_path: "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
    release_date: "2019-05-03",
    vote_average: 7.1,
    overview: "In a world where people collect pocket-size monsters (Pokémon) to do battle...."
  }
]

export const mockSelectedMovie = {
  adult: false,
  backdrop_path: "/bi4jh0Kt0uuZGsGJoUUfqmbrjQg.jpg",
  belongs_to_collection: null,
  budget: 80000000,
  homepage: "http://www.shazammovie.com",
  id: 287947,
  imdb_id: "tt0448115",
  original_language: "en",
  original_title: "Shazam!",
  overview: "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
  popularity: 307.286,
  poster_path: "/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
  release_date: "2019-03-23",
  revenue: 321937864,
  runtime: 132,
  status: "Released",
  tagline: "Just Say The Magic Word",
  title: "Shazam!",
  video: false,
  vote_average: 7.2,
  vote_count: 1528,
  showFavorites: false
}