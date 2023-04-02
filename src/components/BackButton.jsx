import { Link, useLocation } from 'react-router-dom';

export const BackButton = () => {
  const location = useLocation();
  return <Link to={location.state?.from ?? '/'}>Go back</Link>;
};
