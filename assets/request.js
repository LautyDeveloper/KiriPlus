const KEY = "e64177b8092a02bcca8b6fd4385a633e";

const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

const fetchMovies = async(searchTerm, page = 1) =>{
	const response = await fetch(searchTerm + `&page=${page}`)
	const data = await response.json()

	return data;
}