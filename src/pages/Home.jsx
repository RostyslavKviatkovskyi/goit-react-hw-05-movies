import { useState, useEffect } from 'react';
import { fetchMoviesDay } from 'api-services/api-service';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMoviesDay(page)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <main>
      {/* <h1>Trending today</h1>

      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )} */}
      <MoviesList movies={movies} />
    </main>
  );
};
