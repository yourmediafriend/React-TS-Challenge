export type belongsToCollectionType = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

export type genreType = {
	id: number;
	name: string;
};

export type productionCompaniesType = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
};

export type productionCountriesType = {
	iso_3166_1: string;
	name: string;
};

export type spokenLanguagesType = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type movieLongDetailType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: belongsToCollectionType;
	budget: number;
	genres: genreType[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: productionCompaniesType[];
	production_countries: productionCountriesType[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: spokenLanguagesType[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};
