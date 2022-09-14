import React from "react";
import { TMDB_API, TMDB_IMAGESIZES } from "../../utils/constants/tmdbApi";

const { URL } = TMDB_API;

type MoviePosterProps = {
	image: string;
	name: string;
	size?: string;
};

const defaultProps = {
	size: TMDB_IMAGESIZES.poster_sizes[2],
};

const MoviePoster = ({
	image,
	name,
	size = defaultProps.size,
}: MoviePosterProps): JSX.Element => {
	return <img src={`${URL}/t/p/${size}/${image}`} alt={name} />;
};

MoviePoster.defaultProps = defaultProps;

export default MoviePoster;
