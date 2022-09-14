import { MovieDetailType } from "./movieDetails";

export type tmdbResponse = {
	page: number;
	results: MovieDetailType[];
	total_pages: number;
	total_results: number;
};
