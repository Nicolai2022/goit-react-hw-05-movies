import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { searchMoviesByQuery } from '../services/api';
import {
  Container,
  Title,
  Form,
  Input,
  Btn,
  List,
  ListItem,
  LinkItem,
} from 'components/Section.styled';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    searchMoviesByQuery(searchParams)
      .then(setSearchResult)
      .catch(error => console.log(error));
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') return;
    setSearchParams(query);
  };

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <Container>
      <Title>Search movies</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={query}
          placeholder="Search movies"
          onChange={updateQueryString}
        />
        <Btn type="submit">Search</Btn>
      </Form>
      {searchResult.length > 0 && (
        <List>
          {searchResult.map(({ id, title }) => (
            <ListItem key={id}>
              <LinkItem to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </LinkItem>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Movies;
