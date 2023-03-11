import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByName } from '../API';
import MovieList from "components/MovieList/MovieList";
import SearchBox from "components/SearchBox/SearchBox";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

useEffect(() => {
  const query = searchParams.get('query');
  
  if (!query) return;

  async function searchMovies() {
    try {
      const { results } = await fetchMovieByName(query);
      if (results.length === 0) {
        return alert('No movie with such name')
      }
      const moviesToSave = results.map(result => ({ id: result.id, title: result.title }))
      setMovies(moviesToSave);
    } catch (error) {
      return alert('Something went wrong!')
    }
  }
  searchMovies();
}, [searchParams])

  const onSubmit = (query) => {
    setSearchParams({ query });
  }
  
  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
      {movies.length !== 0 && <MovieList movies={movies} header={`Movies containing the query "${searchParams.get('query')}"`} />}
    </main>
  );
};

export default Movies;