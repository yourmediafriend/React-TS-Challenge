import React from "react";
import styled from "styled-components";
import { styleSettings } from "../../utils/settings/styleSettings";
import { mediaQueries } from "../../utils/helpers/getMediaQueries";

const { gutter } = styleSettings;

const GridContainerSC = styled.div`
	display: grid;
	grid-auto-rows: auto;
	gap: 0 ${gutter.xSmall}px;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: auto 1fr;

	@media ${mediaQueries.greaterThan.small} {
		gap: 0 ${gutter.small}px;
	}

	@media ${mediaQueries.greaterThan.medium} {
		gap: 0 ${gutter.medium}px;
	}
`;

export const ContentGrid = ({ children, className }): JSX.Element => (
	<GridContainerSC className={className}>{children}</GridContainerSC>
);

export default ContentGrid;
