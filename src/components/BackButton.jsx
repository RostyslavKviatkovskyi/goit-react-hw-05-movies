import { Link } from 'react-router-dom';

export const BackButton = ({ to, children }) => {
  // const location = useLocation();
  // return <Link to={location.state?.from ?? '/movies'}>Go back</Link>;
  return <Link to={to}>{children}</Link>;
};
