import React from "react";
import styled from "styled-components";
import MovieCard from "../MovieCard";
import { movieDetailType } from "../../utils/types/movieDetailType";

const MovieGridSC = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 10px;
`;

type Props = {
	loading: boolean;
	sortedList: movieDetailType[] | undefined;
};

const MovieGrid = ({ loading, sortedList }: Props): JSX.Element | null =>
	!loading && sortedList ? (
		<MovieGridSC>
			{sortedList?.map((detail) => (
				<MovieCard
					key={detail.id}
					id={detail.id}
					poster_path={detail.poster_path}
					original_title={detail.original_title}
					title={detail.title}
					release_date={detail.release_date}
					popularity={detail.popularity}
				/>
			))}
		</MovieGridSC>
	) : null;

export default MovieGrid;
