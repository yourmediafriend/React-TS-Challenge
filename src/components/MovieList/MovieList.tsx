import React from "react";
import MovieCard from "../MovieCard";
import { TMDB_API } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import useGetData from "../../utils/hooks/useGetData";

const MovieList = () => {
	const { AUTH, ENDPOINT, DISCOVER } = TMDB_API;

	const apiQuery = `?api_key=${AUTH}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1985&with_watch_monetization_types=flatrate`;
	const url = `${ENDPOINT}${DISCOVER}${apiQuery}`;

	const tmdbResonse = useGetData(url);

	const movieList = tmdbResonse && tmdbResonse?.data?.results;

	return (
		<div>
			{movieList?.map((detail) => (
				<MovieCard
					key={detail.id}
					id={detail.id}
					poster_path={detail.poster_path}
					original_title={detail.original_title}
					release_date={detail.release_date}
				/>
			))}
		</div>
	);
};

export default MovieList;
