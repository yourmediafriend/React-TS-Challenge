import React from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../MoviePoster/MoviePoster";
import { TMDB_API } from "../../utils/constants/tmdbApi";
//import { movieDetailType } from "../../utils/types/movieDetailType";

// use Partial of movieDetails

type CardProps = {
	id: number;
	image: string;
	name: string;
	releaseDate: string;
};

const Card = ({ id, image, name, releaseDate }: CardProps) => {
	return (
		<Link to={`movie/${id}`}>
			<MoviePoster image={image} name={name} />
			<h1>{name}</h1>
			<h2>{releaseDate}</h2>
		</Link>
	);
};

export default Card;
