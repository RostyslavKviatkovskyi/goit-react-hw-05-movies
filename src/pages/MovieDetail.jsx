import { fetchMovieDetailById } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetailById(movieId).then(response => {
      console.log(response);
      setMovieDetail(response.data.data);
      console.log(movieDetail, 'movieDetail');
    });
  }, [movieId]);

  return (
    <div>
      <BackButton />

      <div>
        <img src={'#film_poster'} alt={'film_poster'} />

        <p>about film</p>
      </div>

      <nav>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </nav>

      <Outlet />
    </div>
  );
};
