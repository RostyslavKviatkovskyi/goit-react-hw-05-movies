import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `${location.pathname}${location.search ?? ''}` }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

MoviesList.prototype = {
  movies: PropTypes.array.isRequired,
};
