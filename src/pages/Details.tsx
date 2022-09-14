import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

export const Details = () => {
	const { id } = useParams();
	return <MovieDetails id={id} />;
};

export default Details;
