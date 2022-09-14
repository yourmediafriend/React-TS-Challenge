import React from "react";
import { TMDB_API } from "../../utils/constants/tmdbApi";

interface CardProps {
	image: string;
	name: string;
}

const Card = ({ image, name }: CardProps) => {
	const { URL } = TMDB_API;

	return (
		<div>
			<img src={`${URL}/t/p/w220_and_h330_face/${image}`} alt={name} />
			<h1>{name}</h1>
		</div>
	);
};

export default Card;
