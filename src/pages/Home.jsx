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
      <MoviesList movies={movies} />
    </main>
  );
};
