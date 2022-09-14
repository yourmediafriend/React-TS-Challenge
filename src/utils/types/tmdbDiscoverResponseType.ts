import { movieDetailType } from "./movieDetailType";

export type tmdbDiscoverResponseType = {
	page: number;
	results: movieDetailType[];
	total_pages: number;
	total_results: number;
};
