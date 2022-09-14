import { styleSettings } from "../settings/styleSettings";

export const mediaQueries = {
	greaterThan: {
		extraSmall: `screen and (min-width: ${styleSettings.breakpoints.xSmall}px)`,
		small: `screen and (min-width: ${styleSettings.breakpoints.small}px)`,
		medium: `screen and (min-width: ${styleSettings.breakpoints.medium}px)`,
		large: `screen and (min-width: ${styleSettings.breakpoints.large}px)`,
		extraLarge: `screen and (min-width: ${styleSettings.breakpoints.xLarge}px)`,
		maxPageWidth: `screen and (min-width: ${styleSettings.breakpoints.maxPageWidth}px)`,
	},
	lessThan: {
		extraSmall: `screen and (max-width: ${styleSettings.breakpoints.xSmall}px)`,
		small: `screen and (max-width: ${styleSettings.breakpoints.small}px)`,
		medium: `screen and (max-width: ${styleSettings.breakpoints.medium}px)`,
		large: `screen and (max-width: ${styleSettings.breakpoints.large}px)`,
		extraLarge: `screen and (max-width: ${styleSettings.breakpoints.xLarge}px)`,
		maxPageWidth: `screen and (max-width: ${styleSettings.breakpoints.maxPageWidth}px)`,
	},
};
