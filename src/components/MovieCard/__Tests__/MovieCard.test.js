import * as React from "react";
import TestRenderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import {
	render,
	screen,
	fireEvent,
	cleanup,
	done,
} from "@testing-library/react";
import MovieCard from "../MovieCard";
import { movieDetailShort as detail } from "../../../__Tests__/__mockData.json";

beforeEach(() => {
	render(
		<Router>
			<MovieCard
				id={detail.id}
				poster_path={detail.poster_path}
				original_title={detail.original_title}
				title={detail.title}
				release_date={detail.release_date}
				popularity={detail.popularity}
			/>
		</Router>
	);
});

afterEach(cleanup);

describe(`Movie Card`, () => {
	it("Has Link to Move Detail Page", () => {
		expect(screen.getByTestId("movie-link")).toBeTruthy();
	});

	it("Has Movie Title", () => {
		expect(screen.getByTestId("movie-title")).toBeTruthy();
	});

	it("Has Movie Image", () => {
		expect(screen.getByTestId("movie-poster")).toBeTruthy();
	});

	it("Has Movie Rating", () => {
		expect(screen.getByTestId("movie-release-year")).toBeTruthy();
	});
	it("Has Movie Date", () => {
		expect(screen.getByTestId("movie-rating")).toBeTruthy();
	});

	it(`Matches snapshot`, () => {
		const tree = TestRenderer.create(
			<Router>
				<MovieCard
					id={detail.id}
					poster_path={detail.poster_path}
					original_title={detail.original_title}
					title={detail.title}
					release_date={detail.release_date}
					popularity={detail.popularity}
				/>
			</Router>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
