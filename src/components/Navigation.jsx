import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Outlet />
    </div>
  );
