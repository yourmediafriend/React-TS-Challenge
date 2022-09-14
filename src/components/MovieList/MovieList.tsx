import React, { useState, useEffect } from "react";
import ListHeader from "./ListHeader";
import { TMDB_API } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import useGetData from "../../utils/hooks/useGetData";
import {
	sortByTitle,
	sortByRating,
	sortByDate,
} from "../../utils/helpers/sortMovies";
import { movieDetailType } from "../../utils/types/movieDetailType";
import MovieGrid from "./MovieGrid";

const { AUTH, ENDPOINT, DISCOVER } = TMDB_API;
const apiQuery = `?api_key=${AUTH}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1970`;
const url = `${ENDPOINT}${DISCOVER}${apiQuery}`;

enum SORT_TYPES {
	DATE = "date",
	TITLE = "title",
	RATING = "rating",
}

const MovieList = () => {
	const [sortedList, setSortedList] = useState<movieDetailType[]>();

	const tmdbResonse = useGetData(url);
	const loading = tmdbResonse && tmdbResonse?.loading;
	const movieList = tmdbResonse && tmdbResonse?.data?.results;

	useEffect(() => {
		setSortedList(movieList);
	}, [tmdbResonse]);

	const sortByReleaseDate = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSortedList(sortByDate(movieList));
	};

	const sortByTitleMethod = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSortedList(sortByTitle(movieList));
	};

	const sortByPopularity = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setSortedList(sortByRating(movieList));
	};

	return (
		<>
			<ListHeader
				sortByReleaseDate={sortByReleaseDate}
				sortByTitle={sortByTitleMethod}
				sortByPopularity={sortByPopularity}
			/>
			<MovieGrid loading={loading} sortedList={sortedList} />
		</>
	);
};

export default MovieList;
