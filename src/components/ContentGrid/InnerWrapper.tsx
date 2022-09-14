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
	children?: any;
	center?: boolean;
};

const defaultProps = {
	className: "",
	children: null,
	center: false,
};

export const InnerWrapper = forwardRef<HTMLInputElement>(
	({ className, children, center }: Props, ref): JSX.Element => {
		return (
			<InnerWrapperSC ref={ref} className={className} center={center}>
				{children}
			</InnerWrapperSC>
		);
	}
);

InnerWrapper.displayName = "InnerWrapper";
InnerWrapper.defaultProps = defaultProps;

export default InnerWrapper;
