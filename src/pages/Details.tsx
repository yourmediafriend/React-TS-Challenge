import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

import { InnerWrapper, ContentGrid } from "../components/ContentGrid";

export const Details = () => {
	const { id } = useParams();
	return (
		<InnerWrapper>
			<ContentGrid>
				<MovieDetails id={id} />
			</ContentGrid>
		</InnerWrapper>
	);
};

export default Details;
