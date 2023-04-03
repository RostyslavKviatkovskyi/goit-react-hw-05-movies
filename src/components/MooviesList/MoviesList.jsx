import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from './MooviesListStyled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // console.log(location);
  return (
    <>
      {movies.length > 0 && (
        <List>
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
        </List>
      )}
    </>
  );
};

MoviesList.prototype = {
  movies: PropTypes.array.isRequired,
};
