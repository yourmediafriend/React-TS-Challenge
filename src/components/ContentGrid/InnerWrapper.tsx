import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { styleSettings } from "../../utils/settings/styleSettings";
import { mediaQueries } from "../../utils/helpers/getMediaQueries";

const { margin } = styleSettings;

export const InnerWrapperCss = css<{ center: boolean }>`
	width: 100%;
	height: 100%;
	${(props) =>
		props.center &&
		`
  margin: 0 auto;
  max-width: ${styleSettings.maxPageWidth}px;
`}

	box-sizing: border-box;

	padding-left: ${margin.small}px;
	padding-right: ${margin.small}px;

	@media ${mediaQueries.greaterThan.small} {
		padding-left: ${margin.medium}px;
		padding-right: ${margin.medium}px;
	}

	@media ${mediaQueries.greaterThan.medium} {
		padding-left: ${margin.medium}px;
		padding-right: ${margin.medium}px;
	}

	@media ${mediaQueries.greaterThan.large} {
		padding-left: ${margin.large}px;
		padding-right: ${margin.large}px;
	}
`;

const InnerWrapperSC = styled.div<{ center: boolean }>`
	${InnerWrapperCss}
`;

type Props = {
	className?: string;
	children?: JSX.Element | string | number | null;
	center?: boolean;
} & typeof defaultProps;

const defaultProps = {
	className: "",
	children: null,
	center: false,
};

export const InnerWrapper = ({
	className,
	children,
	center = defaultProps.center,
}: Props): JSX.Element => {
	return (
		<InnerWrapperSC className={className} center={center}>
			{children}
		</InnerWrapperSC>
	);
};

InnerWrapper.defaultProps = defaultProps;

export default InnerWrapper;
