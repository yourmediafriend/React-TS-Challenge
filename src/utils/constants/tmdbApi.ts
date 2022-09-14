export enum TMDB_API {
	AUTH = "9fb9a3899d8fc3a89f4b114fc2144083",
	ENDPOINT = "https://api.themoviedb.org/3",
	DISCOVER = "/discover/movie",
	FIND = "/find",
	GENRE = "/genre/movie/list",
	MOVIE = "/movie",
	PERSON = "/person",
	URL = "https://www.themoviedb.org",
}

export const TMDB_IMAGESIZES = {
	backdrop_sizes: ["w300", "w780", "w1280", "original"],
	logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
	poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
	profile_sizes: ["w45", "w185", "h632", "original"],
	still_sizes: ["w92", "w185", "w300", "original"],
};
