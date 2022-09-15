import colors from "./colorSettings";

const maxPageWidth = 1400;

export const styleSettings = {
	colors,
	maxPageWidth,
	margin: {
		xSmall: 16,
		small: 16,
		medium: 32,
		large: 32,
		maxPageWidth: 32,
		xLarge: 32,
	},
	gutter: {
		xSmall: 8,
		small: 8,
		medium: 24,
		large: 24,
		maxPageWidth: 24,
		xLarge: 24,
	},
	breakpoints: {
		xSmall: 320,
		small: 480,
		medium: 768,
		large: 1024,
		maxPageWidth,
		xLarge: 1600,
	},
};

export default styleSettings;
