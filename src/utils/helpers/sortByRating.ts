export const sortByRating = (data) => {
	return data.sort((a, b) => {
		return a.popularity < b.popularity
			? -1
			: a.popularity > b.popularity
			? 1
			: 0;
	});
};
