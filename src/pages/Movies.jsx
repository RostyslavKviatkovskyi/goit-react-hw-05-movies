import { fetchMovieByQuery } from 'api-services/api-service';
import { MoviesList } from 'components/MooviesList/MoviesList';
import { SearchForm } from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    fetchMovieByQuery(query).then(response => {
      setMovies(response.data.results);
      console.log(response.data);
    });
  }, [query, setSearchParams]);

  return (
    <div>
      <SearchForm
        value={query}
        // onSubmit={onFormSubmit}
        onChange={updateQueryString}
      />
      <MoviesList movies={movies} />
    </div>
  );
};
