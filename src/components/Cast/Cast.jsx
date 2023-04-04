import { fetchMovieCast } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Container, Image } from './CastStyled';
import placeholder from '../../images/placeholder.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(response => {
      setCast(response.data.cast);
    });
  }, [movieId]);

  return (
    <Container>
      {cast.length > 0 && (
        <List>
          {cast.map(({ id, original_name, profile_path }) => (
            <li key={id}>
              <Image
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : placeholder
                }
                alt={original_name}
              />
              <p>{original_name}</p>
            </li>
          ))}
        </List>
      )}
    </Container>
  );
};
