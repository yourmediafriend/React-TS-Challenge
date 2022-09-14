import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";
import ListHeader from "./ListHeader";
import { TMDB_API } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import useGetData from "../../utils/hooks/useGetData";
import { sortByTitle } from "../../utils/helpers/sortByTitle";
import { sortByDate } from "../../utils/helpers/sortByDate";
import { sortByRating } from "../../utils/helpers/sortByRating";

const { AUTH, ENDPOINT, DISCOVER } = TMDB_API;
const apiQuery = `?api_key=${AUTH}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1985&with_watch_monetization_types=flatrate`;
const url = `${ENDPOINT}${DISCOVER}${apiQuery}`;

enum SORT_TYPES {
	DATE = "date",
	TITLE = "title",
	RATING = "rating",
}

const MovieGridSC = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 10px;
`;

const MovieList = () => {
	const [sortOrderType, setSortOrderType] = useState<string>();
	const [sortedList, setSortedList] = useState();
	const tmdbResonse = useGetData(url);
	const loading = tmdbResonse && tmdbResonse?.loading;
	const movieList = tmdbResonse && tmdbResonse?.data?.results;

	useEffect(() => {
		console.log("sortOrderType", sortOrderType);
		switch (sortOrderType) {
			case SORT_TYPES.DATE:
				setSortedList(sortByDate(movieList));
				break;
			case SORT_TYPES.TITLE:
				setSortedList(sortByTitle(movieList));
				break;
			case SORT_TYPES.RATING:
				setSortedList(sortByRating(movieList));
				break;
			default:
				setSortedList(movieList);
				break;
		}
	}, [sortOrderType, movieList]);

	const sortByReleaseDate = () => {
		setSortOrderType(SORT_TYPES.DATE);
	};

	const sortByTitleMethod = () => {
		setSortOrderType(SORT_TYPES.TITLE);
	};

	const sortByPopularity = () => {
		setSortOrderType(SORT_TYPES.RATING);
	};

	return (
		<>
			<ListHeader
				sortByReleaseDate={sortByReleaseDate}
				sortByTitle={sortByTitleMethod}
				sortByPopularity={sortByPopularity}
			/>
			{!loading && sortedList && (
				<>
					<MovieGridSC>
						{sortedList?.map((detail) => (
							<MovieCard
								key={detail.id}
								id={detail.id}
								poster_path={detail.poster_path}
								original_title={detail.original_title}
								title={detail.title}
								release_date={detail.release_date}
								popularity={detail.popularity}
							/>
						))}
					</MovieGridSC>
				</>
			)}
		</>
	);
};

export default MovieList;
