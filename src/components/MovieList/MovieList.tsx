import React, { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import { TMDB_API } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import useGetData from "../../utils/hooks/useGetData";
import {
	sortByTitle,
	sortByRating,
	sortByDate,
	searchTitle,
} from "../../utils/helpers/sortMovies";
import { movieDetailType } from "../../utils/types/movieDetailType";
import MovieGrid from "./MovieGrid";

const { AUTH, ENDPOINT, DISCOVER } = TMDB_API;
const apiQuery = `?api_key=${AUTH}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&year=1970`;
const url = `${ENDPOINT}${DISCOVER}${apiQuery}`;

const MovieList = () => {
	const [sortedList, setSortedList] = useState<movieDetailType[]>();
	const [query, setQuery] = useState("");

	const tmdbResonse = useGetData(url);
	const loading = tmdbResonse && tmdbResonse?.loading;
	const movieList = tmdbResonse && tmdbResonse?.data?.results;

	useEffect(() => {
		setSortedList(movieList);
	}, [tmdbResonse]);

	useEffect(() => {
		// setSortedList((state) => state && searchTitle(state, query));
		setSortedList(movieList && searchTitle(movieList, query));
	}, [query]);

	const sortByReleaseDate = (e: React.MouseEvent<HTMLElement>) => {
		setSortedList(movieList && sortByDate([...movieList]));
	};

	const sortByTitleMethod = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSortedList(movieList && sortByTitle([...movieList]));
	};

	const sortByPopularity = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSortedList(movieList && sortByRating([...movieList]));
	};

	return (
		<>
			<ListHeader
				sortByReleaseDate={sortByReleaseDate}
				sortByTitle={sortByTitleMethod}
				sortByPopularity={sortByPopularity}
				setQuery={setQuery}
			/>
			<MovieGrid loading={loading} sortedList={sortedList} />
		</>
	);
};

export default MovieList;
