import React from "react";

type Props = {
	setQuery: (value: string) => void;
};

const Search = ({ setQuery }: Props): JSX.Element => {
	const onChangeMethod = (event: React.FormEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		setQuery(target.value);
	};

	return <input type="text" placeholder="Search" onChange={onChangeMethod} />;
};

export default Search;
