import React from "react";
import styled from "styled-components";

const ListHeaderSC = styled.div`
	width: 100%;
	display: flex;
	padding: 20px;
`;

const SortButtonsWrapperSC = styled.div`
	margin-left: auto;
`;

type Props = {
	sortByTitle: (x: React.MouseEvent<HTMLElement>) => void;
	sortByReleaseDate: (x: React.MouseEvent<HTMLElement>) => void;
	sortByPopularity: (x: React.MouseEvent<HTMLElement>) => void;
};

const ListHeader = ({
	sortByTitle,
	sortByReleaseDate,
	sortByPopularity,
}: Props): JSX.Element => {
	return (
		<ListHeaderSC>
			<h1>Movies</h1>
			<SortButtonsWrapperSC>
				<span>SORT BY:</span>
				<button onClick={sortByTitle}>A-Z</button>
				<button onClick={sortByReleaseDate}>Date</button>
				<button onClick={sortByPopularity}>Rating</button>
			</SortButtonsWrapperSC>
		</ListHeaderSC>
	);
};

export default ListHeader;
