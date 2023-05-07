import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../services/api';

import {
  ReviewsContainer,
  ReviewsTitle,
  ReviewsSubTitle,
  ReviewsList,
  ReviewsListItem,
  ReviewsText,
} from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ReviewsContainer>
      <ReviewsTitle>Reviews</ReviewsTitle>
      {movie.length === 0 && <p>We don`t have any reviews for this movie.</p>}
      <ReviewsList>
        {movie.map(({ id, author, content }) => {
          return (
            <ReviewsListItem key={id}>
              <ReviewsSubTitle>Author: {author}</ReviewsSubTitle>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsListItem>
          );
        })}
      </ReviewsList>
    </ReviewsContainer>
  );
};

export default Reviews;
