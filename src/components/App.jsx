import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import React from 'react';
import { Home } from '../pages/Home';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
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
  );
};
