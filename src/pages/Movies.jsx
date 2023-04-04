import { fetchMovieByQuery } from 'api-services/api-service';
import { MoviesList } from 'components/MooviesList/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query).then(response => {
      setMovies(response.data.results);
    });
  }, [query]);

  return (
    <div>
      <SearchForm
        // value={query}
        onSubmit={updateQueryString}
        // onChange={updateQueryString}
      />
      <MoviesList movies={movies} />
    </div>
  );
};
