import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '248c7debf175a4fcfc603a67fcb6bb7a';

const fetchMoviesDay = async page => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    return response;
  } catch {
    console.log('The request was failed');
  }
};

const fetchMovieCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response;
  } catch {
    console.log('The request was failed. Add the correct ID');
  }
};

const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch {
    console.log('The request was failed. Add the correct ID');
  }
};

const fetchMovieDetailById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch {
    console.log('The request was failed. Add the correct ID');
  }
};

export {
  fetchMoviesDay,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieDetailById,
};
