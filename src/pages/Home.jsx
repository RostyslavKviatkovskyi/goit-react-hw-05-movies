import { useState, useEffect } from 'react';
import { fetchMoviesDay } from 'api-services/api-service';
import { MoviesList } from 'components/MooviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    fetchMoviesDay()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};
