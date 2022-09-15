import React from "react";
import styled from "styled-components";
import { genreType } from "../../utils/types/movieLongDetailType";

const GenreListSc = styled.ul`
	display: flex;
	flex-direction: row;
	margin-bottom: 8px;

	li {
		font-weight: bold;
		margin-right: 8px;
	}
`;

type Props = { genres: genreType[] };

const GenreList = ({ genres }: Props): JSX.Element | null => {
	return genres ? (
		<GenreListSc>
			{genres.map((genre: genreType) => (
				<li>{genre.name}</li>
			))}
		</GenreListSc>
	) : null;
};

export default GenreList;
