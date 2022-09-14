export const sortByDate = (data) => {
	return data.sort((a, b) => {
		return a.release_date < b.release_date
			? -1
			: a.release_date > b.release_date
			? 1
			: 0;
	});
};
