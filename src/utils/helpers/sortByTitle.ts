export const groupAlbabetically = (rawData) =>
	rawData.reduce((r, e) => {
		const sanitizedTitle = removeThe(e.title);
		const initial = sanitizedTitle[0];
		const x = r[initial] ? r[initial] : [];
		r[initial] = [...x, e];
		return r;
	}, {});

const moveTheToEnd = (myArray) => {
	let array = [...myArray];
	array.push(`${array.pop()},`);
	array.push(array.shift());
	return array;
};

export const postPendThe = (myString) => {
	let newStringArray = myString.split(" ");
	return newStringArray[0] === "The" || newStringArray[0] === "A"
		? moveTheToEnd(newStringArray).join(" ")
		: myString;
};
