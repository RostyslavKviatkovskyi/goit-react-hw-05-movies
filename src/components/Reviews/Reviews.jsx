import { fetchMovieReviews } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Container } from './ReviewsStyled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(response => {
      console.log(response.data.results);
      setReviews(response.data.results);
    });
  }, [movieId]);

  return (
    <Container>
      {reviews.length > 0 ? (
        <List>
          {reviews.map(({ content, author, id }) => (
            <li key={id}>
              <h1>Author: {author}</h1>
              <p>{content}</p>
            </li>
          ))}
        </List>
      ) : (
        <div>We dont have any reviews for this movie yet.</div>
      )}
    </Container>
  );
};
