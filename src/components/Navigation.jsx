import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </div>
);
