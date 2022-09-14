import { movieDetailType } from "../types/movieDetailType";

const removeThe = (myString: string) =>
	myString.replace("A ", "").replace("The ", "");

export const sortByTitle = (data: movieDetailType[]) =>
	data.sort((a, b) => {
		const cleanTitleA = removeThe(a.title);
		const cleanTitleB = removeThe(b.title);
		return cleanTitleA < cleanTitleB ? -1 : cleanTitleA > cleanTitleB ? 1 : 0;
	});

export const sortByRating = (data: movieDetailType[]) =>
	data.sort((a, b) => {
		return a.popularity < b.popularity
			? -1
			: a.popularity > b.popularity
			? 1
			: 0;
	});

export const sortByDate = (data: movieDetailType[]) =>
	data.sort((a, b) => {
		return a.release_date < b.release_date
			? -1
			: a.release_date > b.release_date
			? 1
			: 0;
	});

export const searchTitle = (data: movieDetailType[], query: string) =>
	data.filter((obj) => {
		return (
			obj.title
				.toLowerCase()
				.startsWith(
					query.toLowerCase().slice(0, Math.max(obj.title.length - 1, 1))
				) && obj
		);
	});
