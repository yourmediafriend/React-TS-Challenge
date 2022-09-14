import React from "react";
import MovieCard from "../MovieCard";
import { TMDB_API } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import dummyData from "../../dummyData.json";
import useGetData from "../../utils/hooks/useGetData";

const MovieList = () => {
	const { AUTH, ENDPOINT } = TMDB_API;

	const apiQuery = `?api_key=${AUTH}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=1985&with_watch_monetization_types=flatrate`;
	const url = `${ENDPOINT}${apiQuery}`;

	const tmdbResonse = useGetData(url);

	const movieList = tmdbResonse?.data?.results;

	console.log("MovieList", movieList);

	return (
		<div>
			{movieList?.map((detail) => (
				<MovieCard
					key={detail.id}
					image={detail.poster_path}
					name={detail.original_title}
				/>
			))}
		</div>
	);
};

export default MovieList;
