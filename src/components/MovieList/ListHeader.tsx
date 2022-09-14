import React from "react";
import styled from "styled-components";
import Search from "./Search";

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
	setQuery: (x: string) => void;
};

const ListHeader = ({
	sortByTitle,
	sortByReleaseDate,
	sortByPopularity,
	setQuery,
}: Props): JSX.Element => {
	return (
		<ListHeaderSC>
			<h1>Movies</h1>
			<SortButtonsWrapperSC>
				<Search setQuery={setQuery} />
				<span>SORT BY:</span>
				<button onClick={sortByTitle}>A-Z</button>
				<button onClick={sortByReleaseDate}>Date</button>
				<button onClick={sortByPopularity}>Rating</button>
			</SortButtonsWrapperSC>
		</ListHeaderSC>
	);
};

export default ListHeader;
