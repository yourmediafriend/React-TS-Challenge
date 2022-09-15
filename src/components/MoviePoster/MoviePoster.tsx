import React from "react";
import { TMDB_API, TMDB_IMAGESIZES } from "../../utils/constants/tmdbApi";

const { URL } = TMDB_API;

type MoviePosterProps = {
	image_url: string;
	alt: string;
	size?: string;
	className?: string;
};

const defaultProps = {
	size: TMDB_IMAGESIZES.poster_sizes[2],
	className: "",
};

const MoviePoster = ({
	image_url,
	alt,
	size = defaultProps.size,
	className,
}: MoviePosterProps): JSX.Element => {
	return (
		<img
			className={className}
			src={`${URL}/t/p/${size}/${image_url}`}
			alt={alt}
			data-testid="movie-poster"
		/>
	);
};

MoviePoster.defaultProps = defaultProps;

export default MoviePoster;
