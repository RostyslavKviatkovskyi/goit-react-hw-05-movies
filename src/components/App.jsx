import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation';
import { MovieList } from '../pages/MovieList';
import { MovieDetail } from '../pages/MovieDetail';
import React from 'react';
import { Home } from '../pages/Home';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieList />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
