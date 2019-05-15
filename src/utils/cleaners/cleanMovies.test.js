import { cleanMovies } from './cleanMovies';
import { mockMoviesArr } from '../mockData';

describe('cleanMovies', () => {
  it('should return cleaned movie objects', () => {
    const expected = [
      {
        movie_id: 299534,
        title: "Avengers: Endgame",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        release_date: "2019-04-24",
        vote_average: 8.5,
        overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
      },
      {
        movie_id: 299534,
        title: "Avengers: Endgame",
        poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        release_date: "2019-04-24",
        vote_average: 8.5,
        overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
      }
    ];
    const result = cleanMovies(mockMoviesArr);
    expect(result).toEqual(expected);
  })
})