export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=4bd59f0f8930e77f5872cb5fba23dbde`
  );
  const data = await response.json();
  return data.results;
};

export const searchMoviesByQuery = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=4bd59f0f8930e77f5872cb5fba23dbde&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovieById = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=4bd59f0f8930e77f5872cb5fba23dbde`
  );
  const data = await response.json();
  return data;
};

export const getMovieCredits = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4bd59f0f8930e77f5872cb5fba23dbde`
  );
  const data = await response.json();
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4bd59f0f8930e77f5872cb5fba23dbde`
  );
  const data = await response.json();
  return data.results;
};
