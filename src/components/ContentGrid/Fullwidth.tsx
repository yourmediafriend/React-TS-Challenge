import React from "react";
import styled from "styled-components";
import { styleSettings } from "../../utils/settings/styleSettings";
import { mediaQueries } from "../../utils/helpers/getMediaQueries";

const { margin, breakpoints } = styleSettings;

const FullWidthSC = styled.div`
	width: 100vw;
	margin-left: -${margin.small}px;

	@media ${mediaQueries.greaterThan.small} {
		margin-left: -${margin.medium}px;
	}

	@media ${mediaQueries.greaterThan.medium} {
		margin-left: -${margin.large}px;
	}

	@media ${mediaQueries.greaterThan.maxPageWidth} {
		margin-left: calc(
			${breakpoints.maxPageWidth / 2 - margin.maxPageWidth}px - 50vw
		);
	}
`;

const FullWidth = ({ className, children, center = false }) => {
	return <FullWidthSC className={className}>{children}</FullWidthSC>;
};

export default FullWidth;
