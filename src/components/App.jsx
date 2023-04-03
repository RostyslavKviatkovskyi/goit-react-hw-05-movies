import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Navigation = lazy(() =>
  import('./Navigation').then(module => ({ default: module.Navigation }))
);
const Movies = lazy(() =>
  import('../pages/Movies').then(module => ({ default: module.Movies }))
);
const MovieDetails = lazy(() =>
  import('../pages/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);
const Home = lazy(() =>
  import('../pages/Home').then(module => ({ default: module.Home }))
);
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => ({ default: module.Cast }))
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => ({ default: module.Reviews }))
);

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
