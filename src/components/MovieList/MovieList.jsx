import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { Container, List, ListItem, Link } from "./MovieList.styled";

const MovieList = ({movies, header}) => {
  const location = useLocation();

  return (
    <Container>
      {header && <h1>{ header}</h1>}
          <List>
            {movies.map(({ id, title }) => (
              <ListItem key={id}>
                <Link to={`/movies/${id}`} state={{from: location}}>
                  {title}
                </Link>
            </ListItem>
            ))}
          </List>
      </Container>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
  header: PropTypes.string,
};

export default MovieList;