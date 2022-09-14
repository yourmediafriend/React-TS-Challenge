import React from "react";
import { Link } from "react-router-dom";
import MoviePoster from "../MoviePoster/MoviePoster";
import { movieDetailType } from "../../utils/types/movieDetailType";
import styled from "styled-components";
import { TMDB_IMAGESIZES } from "../../utils/constants/tmdbApi";

const LinkSC = styled(Link)`
	border: 1px solid #c7c7c7;
	text-decoration: none;
	color: #373737;
`;
const MoviePosterSC = styled(MoviePoster)`
	width: 100%;
`;

const MovieDetailSC = styled.div`
	width: 100%;
	padding: 10px;
	.title {
	}
	.releaseDate {
	}
`;

type CardProps = Partial<movieDetailType>;

const Card = ({
	id,
	poster_path,
	original_title,
	release_date,
	title,
	popularity,
}: CardProps) => {
	const yyyy = release_date && new Date(release_date).getFullYear();

	return (
		<LinkSC to={`movie/${id}`}>
			{poster_path && original_title && (
				<MoviePosterSC
					image_url={poster_path}
					alt={original_title}
					size={TMDB_IMAGESIZES.poster_sizes[3]}
				/>
			)}
			<MovieDetailSC>
				<h3 className={"title"}>{title}</h3>
				<h4 className={"releaseDate"}>{yyyy}</h4>
				{popularity}
			</MovieDetailSC>
		</LinkSC>
	);
};

export default Card;
