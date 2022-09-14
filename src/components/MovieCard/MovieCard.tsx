import React from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../MoviePoster/MoviePoster";
import { movieDetailType } from "../../utils/types/movieDetailType";

type CardProps = Partial<movieDetailType>;

const Card = ({ id, poster_path, original_title, release_date }: CardProps) => {
	return (
		<Link to={`movie/${id}`}>
			{poster_path && original_title && (
				<MoviePoster image_url={poster_path} alt={original_title} />
			)}
			<h1>{original_title}</h1>
			<h2>{release_date}</h2>
		</Link>
	);
};

export default Card;
