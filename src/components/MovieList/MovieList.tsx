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

	console.log(movieList && movieList[0]);

	return (
		<div>
			{movieList?.map((detail) => (
				<MovieCard
					key={detail.id}
					id={detail.id}
					image={detail.poster_path}
					name={detail.original_title}
					releaseDate={detail.release_date}
				/>
			))}
		</div>
	);
};

export default MovieList;
