import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendingMovies } from '../services/api';
import {
  Container,
  Title,
  List,
  ListItem,
  LinkItem,
} from 'components/Section.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setTrending);
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <List>
        {trending.map(({ id, title }) => (
          <ListItem key={id}>
            <LinkItem to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
