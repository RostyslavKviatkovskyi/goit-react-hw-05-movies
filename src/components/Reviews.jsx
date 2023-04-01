import { fetchMovieReviews } from 'api-services/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ content, author, id }) => (
            <li key={id}>
              <h1>Author: {author}</h1>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We dont have any reviews for this movie yet.</div>
      )}
    </div>
  );
};
