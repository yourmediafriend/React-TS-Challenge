const removeThe = (myString) => myString.replace("A ", "").replace("The ", "");

export const sortByTitle = (data) => {
	return data.sort((a, b) => {
		const cleanTitleA = removeThe(a.title);
		const cleanTitleB = removeThe(b.title);
		return cleanTitleA < cleanTitleB ? -1 : cleanTitleA > cleanTitleB ? 1 : 0;
	});
};

export const sortByRating = (data) => {
	return data.sort((a, b) => {
		return a.popularity < b.popularity
			? -1
			: a.popularity > b.popularity
			? 1
			: 0;
	});
};

export const sortByDate = (data) => {
	return data.sort((a, b) => {
		return a.release_date < b.release_date
			? -1
			: a.release_date > b.release_date
			? 1
			: 0;
	});
};
