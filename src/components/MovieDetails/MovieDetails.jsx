import { useEffect, useRef, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import { searchMovieById } from '../../services/api';
import noPoster from './noPoster.jpg';

import {
  MovieDetailsContainer,
  LinkBtn,
  MovieReviewContainer,
  MovieInfoContainer,
  MovieTitle,
  MovieSubTitle,
  MovieText,
  MovieList,
  MovieListItem,
  MovieAdditionalLink,
} from 'components/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const prePage = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    searchMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <LinkBtn to={prePage.current}>Go back</LinkBtn>
      {Object.keys(movie).length > 0 && (
        <MovieReviewContainer>
          {movie.poster_path !== null ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
          ) : (
            <img src={noPoster} alt="No poster" width="300" />
          )}

          <MovieInfoContainer>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieText>User Score: {movie.vote_average.toFixed(0)}%</MovieText>

            <MovieSubTitle>Overview</MovieSubTitle>
            <MovieText>{movie.overview}</MovieText>

            <MovieSubTitle>Genres</MovieSubTitle>
            <MovieText>
              {movie.genres.map(({ name }) => name).join(', ')}
            </MovieText>

            <MovieSubTitle>Additional information</MovieSubTitle>
            <MovieList>
              <MovieListItem>
                <MovieAdditionalLink to="cast">Cast</MovieAdditionalLink>
              </MovieListItem>
              <MovieListItem>
                <MovieAdditionalLink to="reviews">Reviews</MovieAdditionalLink>
              </MovieListItem>
            </MovieList>
          </MovieInfoContainer>
        </MovieReviewContainer>
      )}

      <Outlet />
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
