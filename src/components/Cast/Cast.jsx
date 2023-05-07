import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from '../../services/api';
import noPhoto from './noPhoto.jpg';

import {
  CastContainer,
  CastTitle,
  CastList,
  CastListItem,
  CastDescription,
  CastText,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastContainer>
      <CastTitle>Cast</CastTitle>
      {movie.length === 0 && (
        <p>We don`t have any informations of cast for this movie</p>
      )}
      <CastList>
        {movie.map(({ id, name, character, profile_path }) => (
          <CastListItem key={id}>
            {profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="150"
              />
            ) : (
              <img src={noPhoto} alt="No photos" width="150" />
            )}
            <CastDescription>
              <CastText>
                <b>{name}</b>
              </CastText>
              <CastText>
                Character:
                <b> {character}</b>
              </CastText>
            </CastDescription>
          </CastListItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

export default Cast;
