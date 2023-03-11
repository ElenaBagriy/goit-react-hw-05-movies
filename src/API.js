import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'a3ea6037e929c907cd6335d101a9b094';

export async function  fetchTrendMovies() {
    const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
}

export async function fetchMovieByName(query) {
    const response = await axios.get(`/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data;
}

export async function fetchMovieById(id) {
    const response = await axios.get(`/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export async function fetchMovieCast(id) {
    const response = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export async function fetchMovieReviews(id) {
    const response = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
}