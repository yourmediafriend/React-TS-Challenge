import React from "react";
import { TMDB_API, TMDB_IMAGESIZES } from "../../utils/constants/tmdbApi"; // To be replaced with your api response data
import useGetData from "../../utils/hooks/useGetData";
import MoviePoster from "../MoviePoster/MoviePoster";

const { AUTH, ENDPOINT, MOVIE, URL } = TMDB_API;
const apiQuery = `?api_key=${AUTH}`;

type MovieDetailsProps = {
	id: number | string | undefined;
};

const MovieDetails = ({ id }: MovieDetailsProps): JSX.Element | null => {
	const url = `${ENDPOINT}${MOVIE}/${id}${apiQuery}`;
	const tmdbResonse = useGetData(url);
	const movieDetail = tmdbResonse && tmdbResonse.data;

	console.log("tmdbResonse: Movie", movieDetail);

	return movieDetail ? (
		<div
			style={{
				background: `url(${URL}/t/p/original/wQraxOsaq0NwTO9rSwLo4Nc8hVG.jpg)`,
			}}
		>
			<h1>{movieDetail.original_title}</h1>
			<MoviePoster
				image={movieDetail.poster_path}
				name={movieDetail.original_title}
				size={TMDB_IMAGESIZES.poster_sizes[4]}
			/>
			<a href={`https://www.imdb.com/title/${movieDetail.imdb_id}`} target="_blank">IMDB</p>
			<p>{movieDetail.popularity}</p>
			<p>{movieDetail.runtime}</p>
			<p>{movieDetail.release_date}</p>
			<p>{movieDetail.overview}</p>
			<ul>
				{movieDetail.genres.map((genre) => (
					<li>{genre.name}</li>
				))}
			</ul>
		</div>
	) : null;
};

export default MovieDetails;
