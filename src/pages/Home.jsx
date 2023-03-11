import { useState, useEffect } from "react";
import { fetchTrendMovies } from "API";
import MovieList from "components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchStartMovies() {
      const { results } = await fetchTrendMovies();
      const moviesToSave = results.map(result => ({ id: result.id, title: result.title }))
      setMovies(moviesToSave);
    }
    fetchStartMovies();
  }, [])

  return (
    <main>
      {movies.length !== 0 && <MovieList movies={movies} header={'Trending today'} />}
    </main>
  );
};

export default Home;