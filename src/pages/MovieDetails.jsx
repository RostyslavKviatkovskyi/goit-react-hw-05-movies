import { fetchMovieDetailById } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';
import placeholder from '../images/placeholder.jpg';

export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetailById(movieId).then(response => {
      setMovieDetail(response.data);
    });
  }, [movieId]);

  const getMovieParams = () => {
    const movieImage = movieDetail.poster_path
      ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`
      : placeholder;
    const movieVote = Math.round(movieDetail.vote_average * 10);
    const movieRelease = new Date(movieDetail.release_date);
    const movieYear = movieRelease.getFullYear() || 'No information provided';
    const movieGenres =
      movieDetail.genres.map(genre => genre.name).join(' ') ||
      'No genres provided';
    return { movieImage, movieVote, movieYear, movieGenres };
  };

  if (!movieDetail) {
    return;
  }

  const { movieImage, movieVote, movieYear, movieGenres } = getMovieParams();

  return (
    <div>
      <BackButton />

      <div>
        <img src={movieImage} alt={movieDetail.title} />

        <h1>
          {movieDetail.title} ({movieYear})
        </h1>
        <p>User score: {movieVote}%</p>
        <h2>Overview</h2>
        <p>{movieDetail.overview}</p>
        <h2>Genres</h2>
        <p>{movieGenres}</p>
      </div>

      <nav>
        {/* <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link> */}
        <Link to={`cast`}>Cast</Link>
        <Link to={`reviews`}>Reviews</Link>
      </nav>

      <Outlet />
    </div>
  );
};
