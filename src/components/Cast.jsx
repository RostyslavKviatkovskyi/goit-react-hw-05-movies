import { fetchMovieCast } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(response => {
      setCast(response.data.cast);
    });
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, original_name, profile_path }) => (
            <li key={id}>
              {profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                />
              )}
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
