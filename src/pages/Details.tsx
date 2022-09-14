import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

type DetailsProps = {
	id: number;
};

export const Details = () => {
	const { id } = useParams();
	return (
		<>
			<MovieDetails id={id} />
		</>
	);
};

export default Details;
